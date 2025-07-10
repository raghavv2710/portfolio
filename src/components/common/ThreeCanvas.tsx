'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

const ThreeCanvas = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;
    
    // Get colors from CSS variables
    const computedStyle = getComputedStyle(document.documentElement);
    const primaryColor = computedStyle.getPropertyValue('--primary').trim();
    const accentColor = computedStyle.getPropertyValue('--accent').trim();
    
    // Determine globe color based on theme
    const globeBaseColor = resolvedTheme === 'dark' ? 'hsl(210 40% 98%)' : 'hsl(276 50% 25%)'; // Dark Violet for light mode

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    // Main Globe
    const globeGeometry = new THREE.IcosahedronGeometry(1.2, 1);
    const globeMaterial = new THREE.MeshStandardMaterial({
      color: globeBaseColor,
      metalness: 0.6,
      roughness: 0.4,
      wireframe: true,
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    globe.scale.set(1.8, 1.8, 1.8);
    scene.add(globe);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 4.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(`hsl(${accentColor})`, 850, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    
    const pointLight2 = new THREE.PointLight(`hsl(${primaryColor})`, 850, 100);
    pointLight2.position.set(-5, -5, -5);
    scene.add(pointLight2);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Globe rotation
      globe.rotation.x += 0.001;
      globe.rotation.y += 0.001;
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, [resolvedTheme]); // Re-run effect when theme changes

  return <div ref={mountRef} className="h-full w-full" />;
};

export default ThreeCanvas;

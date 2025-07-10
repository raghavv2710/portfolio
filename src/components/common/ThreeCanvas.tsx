'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeCanvas = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

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
      color: '#7DF9FF', // Electric Blue
      metalness: 0.6,
      roughness: 0.4,
      wireframe: true,
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    globe.scale.set(1.35, 1.35, 1.35);
    scene.add(globe);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 4.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xBE3DFF, 850, 100); // Vibrant Purple
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    
    const pointLight2 = new THREE.PointLight(0x7DF9FF, 850, 100); // Electric Blue
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
  }, []);

  return <div ref={mountRef} className="h-full w-full" />;
};

export default ThreeCanvas;
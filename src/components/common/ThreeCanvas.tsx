'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeCanvas = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    // Increase the 'far' clipping plane from 1000 to 10 to ensure the ring is not clipped
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 10);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Main Globe
    const globeGeometry = new THREE.IcosahedronGeometry(2.5, 1);
    const globeMaterial = new THREE.MeshStandardMaterial({
      color: '#7DF9FF', // Electric Blue
      metalness: 0.6,
      roughness: 0.4,
      wireframe: true,
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);

    // Orbital Ring
    const ringGeometry = new THREE.TorusGeometry(3.5, 0.02, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({ color: '#BE3DFF', transparent: true, opacity: 0.5 });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    // Set rotation for top-right to bottom-left tilt
    ring.rotation.x = Math.PI * 0.25;
    ring.rotation.y = Math.PI * 0.25;
    scene.add(ring);

    // Orbiting Satellite (Octahedron)
    const satelliteGeometry = new THREE.OctahedronGeometry(0.2, 0);
    const satelliteMaterial = new THREE.MeshStandardMaterial({
      color: '#FFFFFF',
      emissive: '#BE3DFF',
      emissiveIntensity: 2,
      metalness: 0.8,
      roughness: 0.2,
    });
    const satellite = new THREE.Mesh(satelliteGeometry, satelliteMaterial);
    scene.add(satellite);
    
    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xBE3DFF, 350, 100); // Vibrant Purple
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);
    
    const pointLight2 = new THREE.PointLight(0x7DF9FF, 350, 100); // Electric Blue
    pointLight2.position.set(-5, -5, -5);
    scene.add(pointLight2);

    const clock = new THREE.Clock();

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Globe rotation
      globe.rotation.x += 0.001;
      globe.rotation.y += 0.001;
      
      // Satellite orbit
      const orbitRadius = 3.5;
      satellite.position.x = Math.cos(elapsedTime * 0.5) * orbitRadius;
      satellite.position.z = Math.sin(elapsedTime * 0.5) * orbitRadius;

      // Make satellite follow the ring's tilt
      const ringRotation = new THREE.Quaternion().setFromEuler(ring.rotation);
      satellite.position.applyQuaternion(ringRotation);

      // Satellite's own rotation
      satellite.rotation.y += 0.01;
      
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

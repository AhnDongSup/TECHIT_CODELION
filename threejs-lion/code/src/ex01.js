import * as THREE from 'three';

// ----- 주제: 기본 장면 구성

export default function example() {
	// Renderer
	const canvas = document.querySelector('#three-canvas');
	const renderer = new THREE.WebGLRenderer({
		// canvas: canvas,
		canvas,
		antialias: true
	});
	renderer.setSize(window.innerWidth, window.innerHeight); // 렌더러 크기를 브라우저 창 크기로
	renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1); // 고해상 디스플레이 지원
	renderer.shadowMap.enabled = true; // 그림자가 생기도록

	// ----- Scene
	const scene = new THREE.Scene();
	// 배경색 설정
	scene.background = new THREE.Color('white');

	// ----- Camera(카메라)
	// 원근 카메라
	const camera = new THREE.PerspectiveCamera(
		75, // 시야각(field of view)
		window.innerWidth / window.innerHeight, // 장면 비율
		0.1, // near(가까이 보이는 한계)
		1000 // far(멀리 보이는 한계)
	);
	camera.position.set(-2, 2, 5); // 카메라 위치
	// camera.position.x = -2;
	// camera.position.y = 2;
	// camera.position.z = 5;
	scene.add(camera);
	// camera.lookAt(new THREE.Vector3(0, 0, 0)); 카메라가 시전고정할 대상

	// ----- Light(조명)
	// 은은한 조명
	const ambientLight = new THREE.AmbientLight('white', 0.5); // 색상, 강도
	scene.add(ambientLight);
	// 스팟 조명
	const spotLight = new THREE.SpotLight('white', 0.7); // 색상, 강도
	spotLight.position.set(-2, 5, 3);
	spotLight.castShadow = true; // 그림자를 만들 수 있도록
	spotLight.shadow.mapSize.width = 1024; // 그림자 해상도
	spotLight.shadow.mapSize.height = 1024;
	scene.add(spotLight);

	// ----- Mesh
	const floor = new THREE.Mesh(
		new THREE.PlaneGeometry(5, 5),
		new THREE.MeshStandardMaterial({
			color: 'lightgray'
		})
	);
	floor.receiveShadow = true; // 표면에 그림자가 생길 수 있도록
	// floor.rotation.x = -Math.PI * 0.5; // Math.PI는 180도
	floor.rotation.x = THREE.MathUtils.degToRad(-90);
	// 90도로 눕혀주기
	const box = new THREE.Mesh(
		new THREE.BoxGeometry(1, 1, 1),
		new THREE.MeshStandardMaterial({
			color: 'red'
		})
	);
	box.castShadow = true; // 그림자를 만들 수 있도록
	box.position.y = 0.5;

  scene.add(floor, box); // scene에 조립
  renderer.render(scene, camera); // 그리기(렌더링)

	// ----- 캔버스 사이즈를 브라우저 창 사이즈에 맞추기
	function setSize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix(); // 카메라 관련 속성이 변하면 실행
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.render(scene, camera);
	}

	// ----- 이벤트
	// 브라우저 창 사이즈 변경 시, 캔버스 사이즈를 맞추기 위해 실행
	window.addEventListener('resize', setSize);
}

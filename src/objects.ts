// objects.ts
import { BoxGeometry, Mesh, MeshLambertMaterial } from 'three';

// shape of cube
const cubeGeometry = new BoxGeometry(6, 6, 6);
// red mat
const cubeMaterial = new MeshLambertMaterial({ color: 0xff0000 });
// generate new shape
const cube = new Mesh(cubeGeometry, cubeMaterial);

export { cube };

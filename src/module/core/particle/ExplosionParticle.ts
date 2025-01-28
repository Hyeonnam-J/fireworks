import * as THREE from 'three'

import CVector3 from "../../../type/CVector3"

import BaseParticle from "./BaseParticle"
import TYPE from '../../../definition/type'
import PColor from '../../../type/PColor'

const time_quickest = 1.5
const time_quick = 3
const time_moderate = 4.5
// const time_slow = 6
// const time_slowest = 7.5

// const dustCreationInterval_quickest = 5
// const dustCreationInterval_quick = 10
const dustCreationInterval_moderate = 15
// const dustCreationInterval_slow = 20
const dustCreationInterval_slowest = 25

const gravity_light = 0.01
const gravity_moderate = 0.02
// const gravity_heavy = 0.03

const size = 0.1

export default class ExplosionParticle extends BaseParticle {
    private object3D: THREE.Object3D
    private endRelativePointArr: CVector3[]
    private gravity: number = 0

    private constructor(
        beginAbsolutePoint: CVector3,
        endRelativePointArr: CVector3[],
        explosionType: string,
        pColor: PColor
    ) {
        
        const geometry = new THREE.BoxGeometry(size, size, size)
        // [TODO]: #1
        // The base material color blends with the instance color set by setColorAt.
        // When the material color is white (#ffffff), the intended instance colors display correctly.
        // const material = new THREE.MeshStandardMaterial({ color: color.main, transparent: true })
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true })
        const instancedMesh = new THREE.InstancedMesh(geometry, material, endRelativePointArr.length)
        const object3D = new THREE.Object3D()

        // Time.
        let time
        if (
            explosionType === TYPE.EXPLOSION.ROUTINE.PETITE_BURST
        ) {
            time = time_quickest
        } else if (explosionType === TYPE.EXPLOSION.ROUTINE.BURST) {
            time = time_quick
        } else {    
            time = time_moderate
        }

        // DustCreationInterval.
        let dustCreationInterval
        if (
            explosionType === TYPE.EXPLOSION.ROUTINE.PETITE_BURST
        ) {
            dustCreationInterval = dustCreationInterval_slowest
        } else if (explosionType === TYPE.EXPLOSION.HIGHLIGHTS.CHAIN_BURST) {
            dustCreationInterval = 0
        } else {
            dustCreationInterval = dustCreationInterval_moderate
        }
        super(TYPE.INSTANCE.EXPLOSION, beginAbsolutePoint, explosionType, pColor, instancedMesh, time, dustCreationInterval)
        
        this.object3D = object3D
        this.endRelativePointArr = endRelativePointArr
        this._setGravity(explosionType)

        for (let i = 0; i < this.endRelativePointArr.length; i++) {
            // [TODO]: #1
            // The base material color blends with the instance color set by setColorAt.
            // To avoid this, the material color is now set to white (#ffffff).
            // However, this means the color for all instances must be explicitly set, not just specific ones.
            if (super.getMesh() instanceof THREE.InstancedMesh) {
                if (i % 2 === 0) {
                    super.setColorAt(i, super.getPColor().main)
                } else {
                    super.setColorAt(i, super.getPColor().sub)
                }
            }
        }
        super.needsUpdateInstanceColor()
    }

    public static create(
        beginAbsolutePoint: CVector3,
        endRelativePointArr: CVector3[],
        explosionType: string,
        pColor: PColor = { main: 'white', sub: 'white'},
    ): ExplosionParticle {
        return new ExplosionParticle(beginAbsolutePoint, endRelativePointArr, explosionType, pColor)
    }

    public recycle(
        beginAbsolutePoint: CVector3,
        endRelativePointArr: CVector3[],
        explosionType: string,
        pColor: PColor
    ): void {
        super.setBeginAbsolutePoint(beginAbsolutePoint)
        this.endRelativePointArr = endRelativePointArr
        super.setExplosionType(explosionType)
        super.setPColor(pColor)
        const _mesh: THREE.Mesh = super.getMesh() as THREE.InstancedMesh
        super.setMesh( new THREE.InstancedMesh(_mesh.geometry, _mesh.material, endRelativePointArr.length) )
        this._setTime(explosionType)
        super.setTotalFrames(super.getTime())
        super.setRemainingFrames(super.getTotalFrames())
        super.setElapsedFrames(0)
        this._setDustCreationInterval(explosionType)
        this._setGravity(explosionType)

        for (let i = 0; i < this.endRelativePointArr.length; i++) {
            // [TODO]: #1
            // The base material color blends with the instance color set by setColorAt.
            // To avoid this, the material color is now set to white (#ffffff).
            // However, this means the color for all instances must be explicitly set, not just specific ones.
            if (super.getMesh() instanceof THREE.InstancedMesh) {
                if (i % 2 === 0) {
                    super.setColorAt(i, super.getPColor().main)
                } else {
                    super.setColorAt(i, super.getPColor().sub)
                }
            }
        }
        super.needsUpdateInstanceColor()
    }

    public update(): void {
        const bp = super.getBeginAbsolutePoint()
        for (let i = 0; i < this.endRelativePointArr.length; i++) {
            // vector.
            const easeOutFactor = super.getEaseOutFactor(super.getElapsedFrames())

            this.object3D.position.x = bp.x + (this.endRelativePointArr[i].x * easeOutFactor)
            
            this.object3D.position.y = bp.y + (this.endRelativePointArr[i].y * easeOutFactor)
            this.endRelativePointArr[i].y -= this.gravity

            this.object3D.position.z = bp.z + (this.endRelativePointArr[i].z * easeOutFactor)

            super.rotateTowardsEndPoint(
                bp, 
                { x: this.object3D.position.x, y: this.object3D.position.y, z: this.object3D.position.z },
                this.object3D
            )
            
            this.object3D.updateMatrix()
            if (super.getMesh() instanceof THREE.InstancedMesh) super.setMatrixAt(i, this.object3D.matrix)
        }

        super.needsUpdateInstanceMatrix()
        super.update()
    }

    private _setTime(explosionType: string) {
        if (
            explosionType === TYPE.EXPLOSION.ROUTINE.PETITE_BURST
        ) {
            super.setTime(time_quickest)
        } else if (explosionType === TYPE.EXPLOSION.ROUTINE.BURST) {
            super.setTime(time_quick)
        } else {    
            super.setTime(time_moderate)
        }
    }

    private _setDustCreationInterval(explosionType: string) {
        if (
            explosionType === TYPE.EXPLOSION.ROUTINE.BURST ||
            explosionType === TYPE.EXPLOSION.SPECIAL.BLOOM ||
            explosionType === TYPE.EXPLOSION.SPECIAL.ERUPT ||
            explosionType === TYPE.EXPLOSION.HIGHLIGHTS.HUGE_BURST
        ) {
            super.setDustCreationInterval(15)
        } else if (
            explosionType === TYPE.EXPLOSION.ROUTINE.PETITE_BURST
        ) {
            super.setDustCreationInterval(25)
        } else if (explosionType === TYPE.EXPLOSION.HIGHLIGHTS.CHAIN_BURST) {
            super.setDustCreationInterval(0)
        } else {
            super.setDustCreationInterval(15)
        }
    }

    private _setGravity(explosionType: string) {
        if (
            explosionType === TYPE.EXPLOSION.ROUTINE.BURST ||
            explosionType === TYPE.EXPLOSION.ROUTINE.PETITE_BURST ||
            explosionType === TYPE.EXPLOSION.HIGHLIGHTS.HUGE_BURST
        ) {
            this.gravity = gravity_light
        } else {
            this.gravity = gravity_moderate
        }
    }
}
import { Physics, Scene } from 'phaser'
import {  PlayerState } from './constants'

export class Player extends Physics.Arcade.Image 
{
    state: PlayerState = PlayerState.IDLE
    
    constructor(scene: Scene, x: number, y: number) 
    {
        super(scene, x, y, 'player')

        scene.add.existing(this)
        scene.physics.add.existing(this)
    }

    start() 
    {
        this.state = PlayerState.IDLE
    }
}
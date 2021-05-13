import React, {Component} from 'react'
import testAudio from '../audio/test_audio.wav'
import {Howl, Howler} from 'howler'

export default class Ambience extends Component{

    // SoundPlay = (src) => {
    //     const sound = new Howl({
    //         src,
    //         loop: true
    //     })
    //     sound.play()
    // }
    // SoundStop = (src) => {
    //     const sound = new Howl({
    //         src
    //     })
    //     sound.stop()
    // }

    render(){
        const coffeeFire = new Howl({
            src: testAudio,
            loop: true
        })
        Howler.volume(1.0)
        return(
            <div>
                I am Ambience
                <button onClick={() => {coffeeFire.playing() ? coffeeFire.pause() : coffeeFire.play() }}>
                   Play / Pause
                </button>
                {/* <button onClick={() => {coffeeFire.stop()}}>Stop</button> */}
            </div>
            
        )
    }
}
import React, {Component} from 'react'
import {Howl, Howler} from 'howler'
import { Button } from 'semantic-ui-react'
import coffeeFireSound from '../audio/coffee_fire.wav'
import stormFireSound from '../audio/storm_fire.wav'
import breezeChimesSound from '../audio/breeze_chimes.wav'
import windWaveSound from '../audio/wind_wave.wav'
import summerNightSound from '../audio/summer_night.wav'
import rainCafe from '../video/cafe_rain.mp4'


const coffeeFire = new Howl({src: coffeeFireSound, loop: true})
const stormFire = new Howl({src: stormFireSound, loop: true})
const breezeChimes = new Howl({src: breezeChimesSound, loop: true})
const windWave = new Howl({src: windWaveSound, loop: true})
const summerNight = new Howl({src: summerNightSound, loop: true}) 

const imageUrl = "https://i0.wp.com/images6.fanpop.com/image/photos/43000000/Fireplace-random-43026886-580-326.gif"

export default class Ambience extends Component{
    state = {
        house: false,
        storm: false,
        breeze: false,
        wave: false,
        summer: false
    }
    handePlayPause = (src, state) => {
        src.playing() ? src.pause() : src.play();
        this.setState({
            [state]: !this.state[state]
        })
    }

    render(){
        
        Howler.volume(1.0)
        return(
            <div>
                <div className="ui grid cards centered">
                <div className="ui card">
                    <div className="ui image">
                        Coffeehouse Fireplace
                    </div>
                    <Button onClick={() => this.handePlayPause(coffeeFire, "house")}>
                    {this.state.house ? "Pause" : "Play"}
                        </Button>
                    </div>
                    <div className="ui card">
                    <div className="ui image">
                        Cozy Storm
                    </div>
                    <Button onClick={() => this.handePlayPause(stormFire, "storm")}>
                    {this.state.storm ? "Pause" : "Play"}
                        </Button>
                    </div>
                    <div className="ui card">
                    <div className="ui image">
                        Breeze & Chimes
                    </div>
                    <Button onClick={() => this.handePlayPause(breezeChimes, "breeze")}>
                    {this.state.breeze ? "Pause" : "Play"}
                        </Button>
                    </div>
                    <div className="ui card">
                    <div className="ui image">
                        Beachfront
                    </div>
                    <Button onClick={() => this.handePlayPause(windWave, "wave")}>
                    {this.state.wave ? "Pause" : "Play"}
                        </Button>
                    </div>
                    <div className="ui card">
                    <div className="ui image">
                        Campfire
                    </div>
                    <Button onClick={() => this.handePlayPause(summerNight, "summer")}>
                    {this.state.summer ? "Pause" : "Play"}
                        </Button>
                    </div>
                    
                    
                </div>
                {/* <video id="myVideo" autoplay="autoplay" muted="muted" loop >
                    <source src={rainCafe} type="video/mp4" />
                </video> */}
            </div>
            
        )
    }
}
createjs.Sound.play=function(e,t,a,n,r,c,o,s,i){var u;createjs.Sound.activePlugin.context&&"suspended"===createjs.Sound.activePlugin.context.state&&createjs.Sound.activePlugin.context.resume(),u=t instanceof Object||t instanceof createjs.PlayPropsConfig?createjs.PlayPropsConfig.create(t):createjs.PlayPropsConfig.create({interrupt:t,delay:a,offset:n,loop:r,volume:c,pan:o,startTime:s,duration:i});var l=createjs.Sound.createInstance(e,u.startTime,u.duration);return createjs.Sound._playInstance(l,u)||l._playFailed(),l};
## Summary ##
Adds useful functionality to the ImpactJS engine.

## Installation ##
1. Download plugin and place in `/lib/plugins/joncom/essentials/` folder.
2. Load plugin within Impact `requires` call.

### animation.js ###

##### Frame Ranges #####

Instead of defining an animation like this:
```
var anim = new ig.Animation( animSheet, 0.1, [0,1,2,3,4,5,6,7,8,9] );
```

You may now also define a range as a string, like this:
```
var anim = new ig.Animation( animSheet, 0.1, "0-9" );
```

### game.js ###

##### spawnEntityBelow #####

By default, Impact will always add a newly spawned entity to the end of the array, meaning that it will be drawn above all pre-existing entities for a least one frame. This method spawns the entity to the start of the array instead.

## Note ##
This README is anything from complete. For details, see the plugin JavaScript files. However, I've left the below documentation in tact just so that you can have an idea of what kind of functionality these plugins add.

## Entity Plugin Methods ##

####angleToCoord(x, y)####
Returns angle in radians from the center of the entity to point (`x`, `y`).

####angleFromVelocity()####
Returns angle in radians based on current `vel.x` and `vel.y` values.

####setVelocityByCoord(x, y, velocity)####
Will set `vel.x` and `vel.y` causing entity to travel at a speed of `velocity`, toward point (`x`, `y`).

####setVelocityByAngle(angle, velocity)####
Will set `vel.x` and `vel.y` causing entity to travel at a speed of `velocity`, in the direction defined by `angle`.

####setAccelByCoord(x, y, accel)####
Will set `accel.x` and `accel.y` toward the direction of point (`x`, `y`).

####setAccelByAngle(angle, accel)####
Will set `accel.x` and `accel.y` toward the direction which `angle` points.

####isTouchingTile(x, y)####
Returns `true` if any part of the entity is overlapping tile (`x`, `y`). Otherwise returns `false`.

####isOnScreen()####
Returns `true` if the entity overlaps the screen. Otherwise returns `false`.
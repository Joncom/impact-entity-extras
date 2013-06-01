## Summary ##
Adds useful functionality to the ImpactJS engine.

## Installation ##
1. Download choice of plugin and place in `/lib/plugins/joncom/` folder.
2. Load plugin within Impact `requires` call.

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
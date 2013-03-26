/*
 * Plugin for ImpactJS which adds useful methods to all entities.
 * @author   Jonathan Commins
 * @modified March 23, 2013
 * @version  1.1
 *
 * Version History:
 * 1.0 - Created.
 * 1.1 - Added isTouchingTile method.
 */
ig.module('plugins.joncom.entity')
.requires('impact.entity')
.defines(function() {
    ig.Entity.inject({
        setVelocityByCoord: function(x, y, velocity) {
            /*
            // Old method, just as accurate, less elegant?
            var distance_x = x - this.pos.x - this.size.x / 2;
            var distance_y = y - this.pos.y - this.size.y / 2;
            this.vel.x = (distance_x > 1 ? 1 : -1) * velocity * (Math.abs(distance_x) / (Math.abs(distance_x) + Math.abs(distance_y)));
            this.vel.y = (distance_y > 1 ? 1 : -1) * velocity * (Math.abs(distance_y) / (Math.abs(distance_x) + Math.abs(distance_y)));
            */
            var centerX = this.pos.x + this.size.x/2;
            var centerY = this.pos.y + this.size.y/2;
            var angleToTarget = Math.atan2(y - centerY, x - centerX);
            this.vel.x = Math.cos(angleToTarget) * velocity;
            this.vel.y = Math.sin(angleToTarget) * velocity;
        },
        setVelocityByAngle: function(angle, velocity) {
            var slope = Math.tan(angle);
            var x_factor = (Math.abs(angle) < 1.57 ? 1 : -1); // 1.57 rads ~~ 90 degrees
            var y_factor = (angle > 0 ? 1 : -1);
            var rise = (Math.abs(slope) / (1 + Math.abs(slope)));
            var run = (1 / (1 + Math.abs(slope)));
            this.vel.y = y_factor * velocity * rise;
            this.vel.x = x_factor * velocity * run;
        },
        isTouchingTile: function(x, y) {
            var tilesize = ig.game.collisionMap.tilesize;
            return ( this.pos.x + this.size.x - 1 >= x * tilesize &&
                this.pos.x < x * tilesize + tilesize &&
                this.pos.y + this.size.y - 1 >= y * tilesize &&
                this.pos.y < y * tilesize + tilesize );
        },
        isOnScreen: function() {
            return (
                this.pos.x + this.size.x - 1 >= ig.game.screen.x &&
                this.pos.x < ig.game.screen.x + ig.system.width &&
                this.pos.y + this.size.y - 1 >= ig.game.screen.y &&
                this.pos.y < ig.game.screen.y + ig.system.height
            );
        }
    });
});
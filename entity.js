/*
 * Plugin for ImpactJS which adds useful methods to all entities.
 * @author   Jonathan Commins
 * @email    joncom@gmail.com
 */
ig.module('plugins.joncom.essentials.entity')
.requires('impact.entity')
.defines(function() {
    ig.Entity.inject({
        angleToCoord: function(x, y) {
            var centerX = this.pos.x + this.size.x/2;
            var centerY = this.pos.y + this.size.y/2;
            var angle = Math.atan2(y - centerY, x - centerX);
            return angle;
        },
        angleToMouse: function() {
            var centerX = this.pos.x + this.size.x/2;
            var centerY = this.pos.y + this.size.y/2;
            var mouseX = ig.input.mouse.x + ig.game.screen.x;
            var mouseY = ig.input.mouse.y + ig.game.screen.y;
            var angle = Math.atan2(mouseY - centerY, mouseX - centerX);
            return angle;
        },
        angleFromVelocity: function() {
            var angle = Math.atan2(this.vel.y, this.vel.x);
            return angle;
        },
        distanceToCoord: function(x, y) {
            var dx = (this.pos.x + this.size.x / 2) - x;
            var dy = (this.pos.y + this.size.y / 2) - y;
            return Math.sqrt(dx * dx + dy * dy);
        },
        setVelocityByCoord: function(x, y, velocity) {
            var dx = x - (this.pos.x + this.size.x/2);
            var dy = y - (this.pos.y + this.size.y/2);
            var distance_total = Math.sqrt( dx * dx + dy * dy );
            var factor = velocity / distance_total;
            this.vel.x = dx * factor;
            this.vel.y = dy * factor;
        },
        setVelocityByAngle: function(angle, velocity) {
            this.vel.x = Math.cos(angle) * velocity;
            this.vel.y = Math.sin(angle) * velocity;
        },
        setAccelByCoord: function(x, y, accel) {
            var dx = x - (this.pos.x + this.size.x/2);
            var dy = y - (this.pos.y + this.size.y/2);
            var distance_total = Math.sqrt( dx * dx + dy * dy );
            var factor = accel / distance_total;
            this.accel.x = dx * factor;
            this.accel.y = dy * factor;
        },
        setAccelByAngle: function(angle, accel) {
            this.accel.x = Math.cos(angle) * accel;
            this.accel.y = Math.sin(angle) * accel;
        },
        isTouchingTile: function(x, y) {
            var tilesize = ig.game.collisionMap.tilesize;
            return (
                this.pos.x + this.size.x - 1 >= x * tilesize &&
                this.pos.x < x * tilesize + tilesize &&
                this.pos.y + this.size.y - 1 >= y * tilesize &&
                this.pos.y < y * tilesize + tilesize
            );
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
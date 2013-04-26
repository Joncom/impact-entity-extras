/*
 * Plugin for ImpactJS which extends the usefulness ig.Image class.
 * @author   Jonathan Commins
 * @modified April 26, 2013
 * @version  1.0
 *
 * Version History:
 * 1.0 - Created.
 */
ig.module('plugins.joncom.image')
.requires('impact.image')
.defines(function() {
    ig.Image.inject({
        // Adds the flipX and flipY parameters to ig.Image.draw()
        draw: function(targetX, targetY, sourceX, sourceY, width, height, flipX, flipY) {
            if (!this.loaded) {
                return;
            }

            var scale = ig.system.scale;
            sourceX = sourceX ? sourceX * scale : 0;
            sourceY = sourceY ? sourceY * scale : 0;
            width = (width ? width : this.width) * scale;
            height = (height ? height : this.height) * scale;

            var scaleX = flipX ? -1 : 1;
            var scaleY = flipY ? -1 : 1;

            if (flipX || flipY) {
                ig.system.context.save();
                ig.system.context.scale(scaleX, scaleY);
            }

            ig.system.context.drawImage(
            this.data, sourceX, sourceY, width, height, ig.system.getDrawPos(targetX) * scaleX - (flipX ? width : 0), ig.system.getDrawPos(targetY) * scaleY - (flipY ? height : 0), width, height);

            if (flipX || flipY) {
                ig.system.context.restore();
            }

            ig.Image.drawCount++;
        }
    });
});
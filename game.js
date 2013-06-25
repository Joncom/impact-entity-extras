ig.module('plugins.joncom.essentials.game')
.requires('impact.game')
.defines(function(){
    ig.Game.inject({
        // Modified spawnEntity method which prevents entity from
        // being above all other entities for a frame.
        // Useful when an entity's zIndex is always low.
        spawnEntityBelow: function( type, x, y, settings ) {
            var entityClass = typeof(type) === 'string'
                ? ig.global[type]
                : type;
            if( !entityClass ) {
                throw("Can't spawn entity of type " + type);
            }
            var ent = new (entityClass)( x, y, settings || {} );
            this.entities.unshift( ent );
            if( ent.name ) {
                this.namedEntities[ent.name] = ent;
            }
            return ent;
        }
    });
});
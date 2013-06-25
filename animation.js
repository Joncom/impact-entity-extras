ig.module('plugins.joncom.animation')
.requires('impact.animation')
.defines(function(){ "use strict";

    ig.Animation.inject({

        init: function(sheet, frameTime, sequence, stop) {
            if (typeof(sequence) == "string") {
                sequence = this._convertStringRangeToSequence(sequence);
            }
            this.parent(sheet, frameTime, sequence, stop);
        },

        // AUTHOR: dmen
        // URL: http://impactjs.com/forums/impact-engine/little-update-to-addanim/page/1
        _convertStringRangeToSequence: function(string) {
            var seq = [];
            var p = sequence.indexOf("-");
            var startRange = parseInt(sequence.substring(0, p), 10);
            var endRange = parseInt(sequence.substr(p + 1), 10);
            for (var i = startRange; i <= endRange; i++) {
                seq.push(i);
            }
            return seq;
        }

    });

});
import Ember from 'ember';
import { WebFont } from 'webfontloader';

export default Ember.Route.extend({
    actions: {
        didTransition() {
            WebFont.on('active', () => {
                console.log('active!');
            }, true);
            console.log('did transition');
        }
    }
});

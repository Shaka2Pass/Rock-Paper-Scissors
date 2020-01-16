// IMPORT MODULES under test here:
import { resultsOfThrow } from '../get-random-throw.js';

const test = QUnit.test;

test ('The throws are identical', function(assert) {

    const result = resultsOfThrow('rock', 'rock');
    
    assert.equal(result, 'draw');
});
    
test ('The players throw beats the computer throw', function(assert) {
    
    const result = resultsOfThrow('rock', 'scissors');

    assert.equal(result,'win');
    
});
    
test ('the computer throw beats the player throw', function(assert) {
    
    const result = resultsOfThrow('rock', 'paper');
    assert.equal(result, 'loss');
});
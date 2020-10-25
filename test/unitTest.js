const chai = require('chai');
const assert = chai.assert;
const functions= require('../functions');

describe('sum', function(){
    it('should return 6 when adding 3 and 3', function(){
        assert.equal(functions.sum(3, 3), 6);
    });

        it('should return -4 when adding 6 and -10', function(){
            assert.equal(functions.sum(6, -10), -4);
        });

        it('should return 2.2 when adding 1.1 and 1.1', function(){
            assert.equal(functions.sum(1.1, 1.1), 2.2);
        });
});

describe('product', function(){
    it('it should return 10 when multiplying 2 and 5', function(){
        assert.equal(functions.product(2, 5), 10);
    });

        it('it should return -6 when multiplying 2 and -3', function(){
            assert.equal(functions.product(2, -3), -6);
        });

        it('it should return 6.25 when multiplying 2.5 and 2.5', function(){
            assert.equal(functions.product(2.5, 2.5), 6.25);
        });
    });

describe('min', function(){
     it('it should return 6 when numbers  6 and 6 are equal', function(){
            assert.equal(functions.min(6, 6),6);
        });
    
            it('it should return 7 when 9 is greater than 7', function(){
                assert.equal(functions.min(9,7), 7);
            });
    
            it('it should return 3 when numbers are 3 and 5', function(){
                assert.equal(functions.min(3, 5), 3);
            });
        });

 describe('max', function(){
            it('it should return 1 when numbers are 1 and 1', function(){
                   assert.equal(functions.max(1, 1),1);
               });
           
                   it('it should return 6 when 6 and 3. when the second number is smaller', function(){
                       assert.equal(functions.max(3, 6), 6);
                   });
           
                   it('it should return 8 when numbers are 5 and -8', function(){
                       assert.equal(functions.max(5,8), 8);
                   });
               });

    describe('head', function(){
            it ('it should return null when the array is empty', function(){
                    let arr =[];
                    assert.isNull(functions.head(arr));
                });
            
                it ('it should return dhruv when the array is [dhruv,ad,7]', function(){
                    let arr =['dhruv','ad',7];
                    assert.equal(functions.head(arr),'dhruv');
                });
            
                it ('it should return 9 when the array is [9,jithu,dhruv]', function(){
                    let arr =[9,'jithu','DA'];
                    assert.equal(functions.head(arr),9);
                });
            });              
       

describe('tail', function(){
    it ('it should return null when the array is empty', function(){
        let arr =[];
        assert.isNull(functions.tail(arr));
    });

    it ('it should return 9 when the array is [dhruv,ik,9]', function(){
        let arr =['dhruv','ik',9];
        assert.equal(functions.tail(arr),9);
    });

    it ('it should return raju when the array is [raju,zm,6]', function(){
        let arr =['raju','zm',6];
        assert.equal(functions.tail(arr),6);
    });
});

describe('mid', function(){
    it ('it should return null when the array is empty', function(){
        let arr =[];
        assert.isNull(functions.mid(arr));
    });

    it ('it should return [Dhruv,jitu] when the array is[zameer,Dhruv,jitu,mani]', function(){
        let arr =['zameer','Dhruv','jitu','mani'];
        assert.deepEqual(functions.mid(arr),['Dhruv','jitu']);
    });

    it ('it should return 8 when the array is [2,8,7]', function(){
        let arr =[2,8,7];
        assert.deepEqual(functions.mid(arr),8);
    });
});

describe('total', function(){
    it ('it should return null when the array is empty', function(){
        let arr =[];
        assert.isNull(functions.total(arr));
    });

    it ('It should return 6 when the array is [2, 2, 2]', function(){
        let arr =[2,2,2];
        assert.equal(functions.total(arr),6);
    });

    it ('it should return 6 when the array is [6]', function(){
        let arr =[6];
        assert.equal(functions.total(arr),[6]);
    });
});

describe('average', function(){
    it ('it should return null when the array is empty', function(){
        let arr =[];
        assert.isNull(functions.average(arr));
    });

    it ('it should return 2 when the array is [1, 2, 3]', function(){
        let arr =[1,2,3];
        assert.equal(functions.average(arr),2);
    });

    it ('It should return -3.6666666666666665 when the array is [-4, -7, 0]', function(){
        let arr =[-4,-7,0];
        assert.deepEqual(functions.average(arr),-3.6666666666666665);
    });
});

describe('smallest', function(){
    it ('it should return null when the array is empty', function(){
        let arr =[];
        assert.isNull(functions.smallest(arr));
    });

    it ('it should return 3 when the array is [7,3,9]', function(){
        let arr =[7,3,9];
        assert.equal(functions.smallest(arr),3);
    });

    it ('it should return -5 when the array is [-1,9,-5]', function(){
        let arr =[-1,9,-5];
        assert.equal(functions.smallest(arr),[-5]);
    });
});

describe('largest', function(){
    it ('it should return null when the array is empty', function(){
        let arr =[];
        assert.isNull(functions.largest(arr));
    });

    it ('It should return 5 when the array is [5, 4, 3]', function(){
        let arr =[5,4,3];
        assert.equal(functions.largest(arr),5);
    });

    it ('It should return 4 when the array is [-7, -6, 4]', function(){
        let arr =[-7,-6,4];
        assert.equal(functions.largest(arr),4);
    });
});


describe('merge', function(){
    it('it should return null when both the arrays are empty', function(){
        let arr1 = [];
        let arr2 = [];
        assert.isNull(functions.merge(arr1,arr2));

    });

    it('It should return [7,7,4,4] when the arrays are [7,4] and [7,4]', function(){
        let arr1 = [7,4];
        let arr2 = [7,4];
        assert.deepEqual(functions.merge(arr1,arr2), [7,7,4,4]);

    });

    it('It should return [2,4,6,8,3] when merging [2,6,3] and [4,8]', function(){
        let arr1 = [2,6,3];
        let arr2 = [4,8];
        assert.deepEqual(functions.merge(arr1,arr2), [2,4,6,8,3]);

    });


});
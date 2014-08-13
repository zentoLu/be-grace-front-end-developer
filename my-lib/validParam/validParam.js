/**
 * @file 验证方法参数是否符合要求，依赖lodash。
 * @author Joel <iamjoel007@gmail.com>
 * @version 0.0.1
 */

(function (win) {
    /**
     * 支持的验证类型
     */
    var validType = [
        'required',
        'object', 'obj',
        'number', 'num',
        'int',
        'bool',
        'string',
        'array', 'arr',
        'function', 'fun'
    ];

    /**
    * @global
    * @param {object|array} validArr - 要验证的参数。
    格式类似[ {value:'要要验证的值',valid:['验证类型1','验证类型2'] },{value:'',valid:[]}...]
    * @returns {array|boolean} 如果验证通过，返回true,否则返回错误信息列表
    */
    function valid(validArr) {
        var errMsgArr = [];
        if (!_.isArray(validArr)) {
            validArr = [validArr];
        }
        _.forEach(validArr, function (each, index) {
            if (each && each.valid !== undefined) {
                if (!_.isArray(each.valid)) {
                    each.valid = [each.valid];
                }
                _.forEach(each.valid, function (eachValid) {
                    var validMsg = validEach(each.value, eachValid);
                    if (validMsg !== true) {
                        errMsgArr.push('index ' + index + ': ' + validMsg);
                    }
                });
            } else {
                errMsgArr.push('index ' + index + ': invalid format!');
            }

        });
        if (errMsgArr.length === 0) {
            return true;
        } else {
            return errMsgArr;
        }
    }

    /**
    * @param {*} value - 要验证的值
    * @param {string|function} - 期望的值的符合的条件。
    若为string，则为改插件内置的验证条件，若为function，则为自定义的验证方法
    */
    function validEach(value, type) {
        var validMsg;
        var ERROR_MSG_PREFIX = 'should be ';
        if (_.isString(type)) {
            if (_.indexOf(validType, type) === -1) {
                validMsg = 'unknown validType:' + type;
            }
            switch (type) {
            case 'required':
                validMsg = value !== undefined ? true : ERROR_MSG_PREFIX + 'not undefined';
                break;
            case 'object':
            case 'obj':
                validMsg = _.isObject(value) ? true : ERROR_MSG_PREFIX + 'object';
                break;
            case 'number':
            case 'num':
                validMsg = _.isNumber(value) ? true : ERROR_MSG_PREFIX + 'number';
                break;
            case 'int':
                validMsg = _.isNumber(value) && _.indexOf((value + ''), '.') === -1 ? true : ERROR_MSG_PREFIX + 'number';
                break;
            case 'bool':
                validMsg = _.isBoolean(value) ? true : ERROR_MSG_PREFIX + 'bool';
                break;
            case 'string':
                validMsg = _.isString(value) ? true : ERROR_MSG_PREFIX + 'string';
                break;
            case 'array':
            case 'arr':
                validMsg = _.isArray(value) ? true : ERROR_MSG_PREFIX + 'array';
                break;
            case 'function':
            case 'fun':
                validMsg = _.isFunction(value) ? true : ERROR_MSG_PREFIX + 'function';
                break;
            }
        } else if (_.isFunction(type)) { // 自定义验证函数
            validMsg = type(value) ? true : 'custom valid fail';
        } else {
            validMsg = 'unknown validType:' + type;
        }
        return validMsg;
    }

    win.validParam = valid;
})(this);
var pattern = /^(.+)\s*->\s*(\d+|)\s*->\s*(".+")\s*(\w+|)$/gmi
var substitution = '{ PSConstants: '\1', value: '\2', charID: '\3', TypeIDToStringID: '\4' },'
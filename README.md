# getQueryString
Read Query String Key-Value in JavaScript




# Usage:

var arr=getQueryString(url);

var arr=getQueryString();//Default value current value

In case of duplicate key it will replace value

# URL Structure:

scheme://host:port/path?key1=value1&key2=value2&key3=value3#anchor

the value after # is anchor which is not part of query string and will be ignored,
query string is the string after ? and before #

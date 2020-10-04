//Replaces value in case of duplicate key
function getQueryString(url=window.location.href)//Default value current URL
{
  url=decodeURI(url);
  var extracted=url.split("#")//Seperates Anchor from URL
  if(extracted.length>0)
  {
    var x=extracted[0].split("?");//Seperates Address & Query String
    if(x.length>1)
    {
      var qstring=x[1];
      var variables=qstring.split("&");//Seperates Key and Value
      var result=new Array();
      variables.map(function(a){
        var values=a.split("=");
        if(values.length>1)
        {
          result[values[0]]=values[1];
        }
        else if(values.length>0)
        {
          result[values[0]]="";
        }
      });
      return result;
    }
    else
    {
      return [];
    }
  }
  else
  {
    return [];
  }
}

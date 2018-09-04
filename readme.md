[![npm package](https://nodei.co/npm/format-helper.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/format-helper/)

[![NPM version](https://img.shields.io/npm/v/format-helper.svg)](https://img.shields.io/npm/v/format-helper.svg)
[![NPM License](https://img.shields.io/npm/l/format-helper.svg)](https://img.shields.io/npm/l/format-helper.svg)
[![NPM Downloads](https://img.shields.io/npm/dm/format-helper.svg?maxAge=43200)](https://img.shields.io/npm/dm/format-helper.svg?maxAge=43200)

How install:

npm install format-helper

How use:

```javascript
 require("format-helper");
 //no need set if you use the first culture added in CulturePack
 Culture.set("pt-BR");
 
 var date = new Date();              
 var time = Time.now();
 var number = 12345.543;
 var smallNumber = 0.2456
 //Format samples
 console.log(time.format("HH:mm:ss.fff"));                       //19:56:01.405
 console.log(time.format());                                     //19:56:01
 console.log(time.format("time"));                               //19:56:01
 console.log(time.format("stime"));                              //19:56
 
 console.log(date.format("dd/MM/yyyy HH:mm:ss.fff tt `GMT`zzz"));//30/10/2016 19:56:01.405 PM GMT-02:00
 console.log(date.format());                                     //30/10/2016 19:56:01
 console.log(date.format("date"));                               //30/10/2016
 console.log(date.format("sdate"));                              //30/10
 console.log(date.format("time"));                               //19:56:01
 console.log(date.format("stime"));                              //19:56
 
 console.log(number.format());                                   //12345,54
 console.log(number.format("C"));                                //R$ 12.345,54
 console.log(number.format("C3"));                               //R$ 12.345,543
 console.log(number.format("N"));                                //12.345,54
 console.log(number.format("N3"));                               //12.345,543
 console.log(number.format("F"));                                //12345,54
 console.log(number.format("F3"));                               //12345,543
 console.log(parseInt(number).format("X"));                      //3039
 console.log(parseInt(number).format("X5"));                     //03039
 console.log(number.format("E"));                                //1.2345543E+4
 console.log(number.format("E10"));                              //1.2345543000E+4
 console.log(number.format("D"));                                //12345
 console.log(number.format("D6"));                               //012345
 console.log(smallNumber.format("P"));                           //24,56%
 console.log(smallNumber.format("P3"));                          //24,560%
 console.log(smallNumber.format("00.00"));                       //00.25
 console.log(smallNumber.format("0,00"));                        //0,25
 console.log(number.format("0 0000.00"));                        //1 2345.54
 console.log((05).format("00"));                                 //05
 
 //Parse Samples
 console.log(parseTime("15:35:42") + "");
 console.log(parseTime("-150:35:42.12", "hh:mm:ss.ff") + "");
 console.log(parseTime("15:35", "stime") + "");
 console.log(parseTime("15:35:00", "time") + "");
 console.log(parseTime("15:35:00.120", "iso") + "");
 
 console.log(parseDate("30/10/2016 19:33:46.591 PM GMT-02:00", "dd/MM/yyyy HH:mm:ss.fff tt `GMT`zzz").format());
 console.log(parseDate("30/10/2016 19:33:46").format());
 console.log(parseDate("30/10/2016", "date").format());
 console.log(parseDate("30/10", "sdate").format());
 console.log(parseDate("19:33:46", "time").format());
 console.log(parseDate("19:33", "stime").format());
 
 
 console.log(parseNumber("12345,54"));
 console.log(parseNumber("R$ 12.345,54", "C"));
 console.log(parseNumber("R$ 12.345,543", "C3"));
 console.log(parseNumber("12.345,54", "N"));
 console.log(parseNumber("12.345,543", "N3"));
 console.log(parseNumber("12345,54", "F"));
 console.log(parseNumber("12345,543", "F3"));
 console.log(parseNumber("3039", "X"));
 console.log(parseNumber("03039", "X5"));
 console.log(parseNumber("1.2345543E+4", "E"));
 console.log(parseNumber("1.2345543000E+4", "E10"));
 console.log(parseNumber("12345", "D"));
 console.log(parseNumber("012345", "D6"));
 console.log(parseNumber("24,56%", "P"));
 console.log(parseNumber("24,560%", "P3"));
 console.log(parseNumber("00.25", "00.00"));
 console.log(parseNumber("0,25", "0,00"));
 console.log(parseNumber("1 2345.54", "0 0000.00"));
 console.log(parseNumber("05", "00"));
 
 //String format samples
 console.log("{0} custa {1:C} em {2:date} às {2:stime}".format("Camiseta", number, date));
 console.log(String.format("{0} custa {1:C} em {2:date} às {2:stime}",["Camiseta", number, date], "en-US"));
 
 //Cultures currently available 
 //pt-BR
 //pt-PT
 //de-DE
 //fr-FR
 //it-IT
 //es-ES
 //en-US
 //en-CA
 //en-GB

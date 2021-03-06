require('../main.js');
//no need set if you use the first culture added in CulturePack
Culture.set("pt-BR");

var date = new Date();
var time = Time.now();
var number = 12345.543;
var smallNumber = 0.2456;

//Format samples
console.log(time.format("HH:mm:ss.fff"));
console.log(time.format());
console.log(time.format("time"));
console.log(time.format("stime"));

console.log(date.format("dd/MM/yyyy HH:mm:ss.fff tt `GMT`zzz"));
console.log(date.format());
console.log(date.format("date"));
console.log(date.format("sdate"));
console.log(date.format("time"));
console.log(date.format("stime"));

console.log(number.format());
console.log(number.format("C"));
console.log(number.format("C3"));
console.log(number.format("N"));
console.log(number.format("N3"));
console.log(number.format("F"));
console.log(number.format("F3"));
console.log(parseInt(number).format("X"));
console.log(parseInt(number).format("X5"));
console.log(number.format("E"));
console.log(number.format("E10"));
console.log(number.format("D"));
console.log(number.format("D6"));
console.log(smallNumber.format("P"));
console.log(smallNumber.format("P3"));
console.log(smallNumber.format("00.00"));
console.log(smallNumber.format("0,00"));
console.log(number.format("0 0000.00"));
console.log((05).format("00"));

//Parse Samples
console.log(parseTime("15:35:42") + "");
console.log(parseTime("-150:35:42.12", "hh:mm:ss.ff") + "");
console.log(parseTime("15:35", "stime") + "");
console.log(parseTime("15:35:00", "time") + "");
console.log(parseTime("15:35:00.120", "iso") + "");

console.log(parseDate("30/10/2016 19:33:46.591 PM GMT-02:00",
  "dd/MM/yyyy HH:mm:ss.fff tt `GMT`zzz").format());
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
console.log("{0} custa {1:C} em {2:date} às {2:stime}".format("Camiseta",
  number, date));
console.log(String.format("{0} custa {1:C} em {2:date} às {2:stime}", [
  "Camiseta", number, date
], "en-US"));

console.log(new Date().time() + "");
console.log(new Date().date() + "");
console.log(Time.now().date() + "");
console.log(new Date().date().compare(new Date().date()) == 0);

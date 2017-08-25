//class for invoice information object
export class InvoiceInfo{
  constructor(iNro, dd, ref, top, pen) {
    this.iNro = iNro;
    this.dd = correctDate(dd);
    this.ref = ref;
    this.top = top;
    this.pen = pen;
  }


}
function correctDate(dd) {
  var today = dd;
  var day = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  if (day < 10) {
    day = '0' + day
  }

  if (mm < 10) {
    mm = '0' + mm
  }
  console.log("Time" + day + '.' + mm + '.' + yyyy);
  return today = day + '.' + mm + '.' + yyyy;
};
export default InvoiceInfo;

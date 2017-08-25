//Class for the invoice product lines object
export class Line {
  constructor(product, q, p, vat) {
    this.product = product;
    this.q = q;
    this.p = p;
    this.vat = vat;
    this.total = Math.round(parseFloat(q*p*(1+(vat/100)))*100)/100;
  }
}

export default Line;

export class Line {
  constructor(product, q, p, vat) {
    this.product = product;
    this.q = q;
    this.p = p;
    this.vat = vat;
    this.total = parseFloat(q*p*(1+(vat/100)));
  }
}

export default Line;

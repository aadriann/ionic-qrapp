export class ScanData {
  information: string;
  type: string;

  constructor(data: string) {
    this.type = "Undefined";
    this.information = data;
    if(data.startsWith("http")){
      this.type = "http";
    }
  }
}

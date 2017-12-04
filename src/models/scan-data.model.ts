export class ScanData {
  information: any;
  type: string;

  constructor(data: string) {
    this.type = "Undefined";
    this.information = data;
    if(data.startsWith("http")){
      this.type = "http";
    } else if(data.startsWith("geo")) {
      this.type = "map";
    } else if(data.startsWith("BEGIN:VCARD")) {
      this.type = "contact";
    } else if(data.startsWith("MATMSG")) {
      this.type = "email";
    }
  }
}

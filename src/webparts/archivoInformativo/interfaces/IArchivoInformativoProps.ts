import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IArchivoInformativoProps {
  description: string;
  selectedListId?: string;
  context: WebPartContext;

}

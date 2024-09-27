import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  type IPropertyPaneConfiguration,
  IPropertyPaneDropdownOption,
  PropertyPaneDropdown,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'ArchivoInformativoWebPartStrings';
import ArchivoInformativo from './components/ArchivoInformativo';
import { IArchivoInformativoProps } from './interfaces/IArchivoInformativoProps';
import { SPHttpClient } from '@microsoft/sp-http';

export interface IArchivoInformativoWebPartProps {
  description: string;
  categoryTitle: string;
  selectedListId?: string;
}

export default class ArchivoInformativoWebPart extends BaseClientSideWebPart<IArchivoInformativoWebPartProps> {
  private lists: IPropertyPaneDropdownOption[] = [];


  public render(): void {
    const element: React.ReactElement<IArchivoInformativoProps> = React.createElement(
      ArchivoInformativo,
      {
        description: this.properties.description,
        categoryTitle: this.properties.categoryTitle,
        selectedListId: this.properties.selectedListId,
        context: this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected async onInit(): Promise<void> {
    await super.onInit();
    const options = await this.fetchLists();
    this.lists = options;
    this.context.propertyPane.refresh();
  }



  // private _getEnvironmentMessage(): Promise<string> {
  //   if (!!this.context.sdks.microsoftTeams) { // running in Teams, office.com or Outlook
  //     return this.context.sdks.microsoftTeams.teamsJs.app.getContext()
  //       .then(context => {
  //         let environmentMessage: string = '';
  //         switch (context.app.host.name) {
  //           case 'Office': // running in Office
  //             environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOffice : strings.AppOfficeEnvironment;
  //             break;
  //           case 'Outlook': // running in Outlook
  //             environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOutlook : strings.AppOutlookEnvironment;
  //             break;
  //           case 'Teams': // running in Teams
  //           case 'TeamsModern':
  //             environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
  //             break;
  //           default:
  //             environmentMessage = strings.UnknownEnvironment;
  //         }

  //         return environmentMessage;
  //       });
  //   }

  //   return Promise.resolve(this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment);
  // }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }

    const {
      semanticColors
    } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
      this.domElement.style.setProperty('--link', semanticColors.link || null);
      this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
    }

  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  private async fetchLists(): Promise<IPropertyPaneDropdownOption[]> {
    try {
      const response = await this.context.spHttpClient.get(
        `${this.context.pageContext.web.absoluteUrl}/_api/web/lists?$filter=Hidden eq false`,
        SPHttpClient.configurations.v1
      );
      const json = await response.json();
      return json.value.map((list: { Title:string }) => ({
        key: list.Title,
        text: list.Title,
      }));
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            },
            {
              groupFields: [
                PropertyPaneTextField('categoryTitle', {
                  label: strings.CategoryTitle
                })
              ]
            },
            {
              groupName: strings.DescriptionFieldDropdownLabel,
              groupFields: [
                PropertyPaneDropdown("selectedListId", {
                  label: "Lista de categorías",
                  options: this.lists,
                }),
              ],
            }
          ]
        }
      ]
    };
  }
}

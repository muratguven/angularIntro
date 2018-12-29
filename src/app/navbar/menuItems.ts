export class MenuItems {

    Id: number;
    ParentId: number;
    PageName: string;
    DisplayName: string;
    Url:string;
    Icon: string;

constructor(){

}

SetMenu(id:number, parentId:number, pageName:string, displayName:string, url:string, icon:string):MenuItems{
    this.Id = id;
    this.ParentId = parentId;
    this.PageName = pageName;
    this.DisplayName = displayName;
    this.Url = url;
    this.Icon = icon;
    return this;
}
}
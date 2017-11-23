import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/data.service';

export interface IMenuItem {
	name: string;
	route: string;
	isMouseOver: boolean
}

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['../../../styles/home.css']
})
export class HomeComponent implements OnInit {
    public menuItems: IMenuItem[] = [
		{
    		name: "top-left",
    		route: "services",
    		isMouseOver: false
    	},
    	{
    		name: "top-right",
    		route: "contact",
    		isMouseOver: false
    	},
    	{
    		name: "bottom-right",
    		route: "about",
    		isMouseOver: false
    	},
    	{
    		name: "bottom-left",
    		route: "portfolio",
    		isMouseOver: false
    	}
    ];
    public isMouseOverMenu: boolean = false;
    projectName: string;

    constructor(private dataService: DataService) { }

    ngOnInit() { 
        this.projectName = this.dataService.getProjectName();
    }

	onMouseOverMenuItem(itemName: string) {
		console.log(`onMouseOverItem: ${JSON.stringify(itemName)}`);
		this.isMouseOverMenu = true;
		let menuItem = this.getMenuItemByName(itemName);
		menuItem.isMouseOver = true;
	}
	
	onMouseLeftMenuItem(itemName: string) {
		console.log(`onMouseLeft: ${JSON.stringify(itemName)}`);
		this.isMouseOverMenu = false;
		let menuItem = this.getMenuItemByName(itemName);
		menuItem.isMouseOver = false;
	}
	
	shouldMoveAwayOnMenuHover(itemName: string): boolean {
		let shouldMoveAway = false;
		let menuItem = this.getMenuItemByName(itemName);
		if (!menuItem) {
			return shouldMoveAway;
		}
		shouldMoveAway = this.isMouseOverMenu && !menuItem.isMouseOver;
		console.log(`shouldMoveAwayOnMenuHover: ${itemName}  --- ${shouldMoveAway}`);
		return shouldMoveAway;
	}

	getMenuItemByName(name: string): {name: string, isMouseOver: boolean} {
		console.log(this);
		
		for (let i = 0; i < this.menuItems.length; i++) {
			let menuItem = this.menuItems[i];
			if (menuItem.name === name) {
				return menuItem;
			}
		}
		
		return null;
	}
	
	getSelectionQuadrantClasses(itemName: string) {
		let cssClasses = {};
		cssClasses[itemName + "-outer-quadrant"] = true;
		
		if (this.shouldMoveAwayOnMenuHover(itemName)) {
			cssClasses[itemName + "-outer-quadrant-slide-out"] = true;
		}
		
		return cssClasses;
	}
	
	getSelectionQuadrantOverlayClasses(itemName: string) {
		let cssClasses = {};
		cssClasses[itemName + "-outer-quadrant"] = true;
		return cssClasses;
	}
	
	getRouteFromName(name: string): string {
		let route = "/";
		for (let item of this.menuItems) {
			if (item.name === name) {
				route += item.route;
				break;
			}
		}
		return route;
	}
}
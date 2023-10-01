import { StrictMode } from "react";
import { ItemView, WorkspaceLeaf } from "obsidian";
import { Root, createRoot } from "react-dom/client";
import { ReactView } from "ReactView";
import * as React from "react";

export const VIEW_TYPE_PROJECTS_DASHBOARD = "projects-dashboard-view";

export class ProjectsDashboardView extends ItemView {
	root: Root | null = null;

	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
	}

	getViewType() {
		return VIEW_TYPE_PROJECTS_DASHBOARD;
	}

	getDisplayText() {
		return "Projects dashboard view";
	}

	async onOpen() {
		console.log('call on Open');
		this.root = createRoot(this.containerEl.children[1]);
		this.root.render(
			<StrictMode>
				<ReactView />
			</StrictMode>
		);
	}

	async onClose() {
		this.root?.unmount();
	}
}

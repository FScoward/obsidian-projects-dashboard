import { ItemView, WorkspaceLeaf } from "obsidian";

export const VIEW_TYPE_PROJECTS_DASHBOARD = "projects-dashboard-view";

export class ProjectsDashboardView extends ItemView {
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
		const container = this.containerEl.children[1];
		container.empty();
		container.createEl("h4", { text: "Example view" });
	}

	async onClose() {
		// Nothing to clean up.
	}
}

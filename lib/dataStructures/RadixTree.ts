import type { Route } from '../types';

export interface RadixNode {
  path: string;
  children: Map<string, RadixNode>;
  component?: React.ComponentType<any>;
  isParam: boolean;
  paramName?: string;
  exact?: boolean;
}

type FindRouteReturnType = {
  component: React.ComponentType<any> | undefined;
  params: Record<string, string>;
};

export class RadixTree {
  root: RadixNode = {
    path: '/',
    children: new Map(),
    isParam: false,
    paramName: undefined,
    component: undefined,
    exact: false,
  };

  getRoutes = (): Route[] => {
    const routes: Route[] = [];

    const dfs = (node: RadixNode, path: string = '') => {
      if (node.component) {
        routes.push({
          path,
          component: node.component,
          exact: node.exact,
          isParam: node.isParam,
          paramName: node.paramName,
          children: [],
        });
      }

      for (const child of node.children.values()) {
        dfs(child, path + '/' + child.path);
      }
    };

    dfs(this.root);
    return routes;
  };

  addRoute = (route: Route) => {
    let node = this.root;
    const pathParts = route.path.split('/').filter(Boolean);

    for (const part of pathParts) {
      const isParam = part.startsWith(':');
      const pathPart = isParam ? part.slice(1) : part;

      if (isParam) {
        node.exact = false;
      }
      if (route.exact) {
        node.exact = true;
      }

      if (!part.startsWith(':')) {
        node.exact = true;
      }

      if (!node.children.has(pathPart)) {
        node.children.set(pathPart, {
          path: part,
          children: new Map(),
          isParam,
          paramName: isParam ? pathPart : undefined,
          component: undefined,
          exact: route.exact,
        });
      }
      node = node.children.get(pathPart)!;
    }

    node.component = route.component;
  };

  findRoute = (path: string): FindRouteReturnType | null => {
    let currentNode = this.root;
    const pathParts = path.split('/').filter(Boolean);
    const params: Record<string, string> = {};

    for (const part of pathParts) {
      if (currentNode.children.has(part)) {
        currentNode = currentNode.children.get(part)!;
      } else {
        const paramNode = Array.from(currentNode.children.values()).find(
          (node) => node.isParam
        );
        if (paramNode) {
          currentNode = paramNode;
          params[paramNode.paramName!] = part;
        } else {
          return null;
        }
      }
    }

    return {
      component: currentNode.component,
      params,
    };
  };

  deleteRoute = (path: string) => {
    let currentNode = this.root;
    const pathParts = path.split('/').filter(Boolean);

    for (const part of pathParts) {
      if (currentNode.children.has(part)) {
        currentNode = currentNode.children.get(part)!;
      } else {
        return;
      }
    }

    currentNode.component = undefined;

    if (currentNode.children.size === 0) {
      const parent = this.root;
      for (const part of pathParts) {
        if (parent.children.size === 1) {
          parent.children.delete(part);
        } else {
          return;
        }
      }
    }
  };
}

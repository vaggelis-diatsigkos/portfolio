import { Connection, Edge, Node } from "react-flow-renderer";

export interface ISkill {
    skill: string;
    percentage: number;
    color: string;
}

export interface IProject {
    company: string;
    name: string;
    for?: string;
    role: string;
    type: string;
    link?: string;
}

export interface ITechnologyGroup {
    category: string;
    items: ITechnology[];
}

export interface ITechnology {
    name: string;
    score?: number;
}

export interface IArchitecture {
    title: string;
    description?: string;
    nodes: Node[],
    edges: Edge[];
}
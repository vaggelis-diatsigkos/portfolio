import { Position, MarkerType } from "react-flow-renderer";
import { IArchitecture, IProject, ISkill, ITechnologyGroup } from "./models";

export const InfoData = {
    github: 'vaggelis-diatsigkos',
    email: 'vaggelis.diatsigkos@outlook.com',
    age: (new Date().getFullYear() - new Date(1991, 1, 1).getFullYear()) + ' (y)',
    experience: (new Date().getFullYear() - new Date(2013, 1, 1).getFullYear()) + ' (y)',
}

export const SkillData: ISkill[] = [
    {
        skill: 'Coaching Skills',
        percentage: 95,
        color: 'bg-green-500'
    },
    {
        skill: 'Development Skills',
        percentage: 90,
        color: 'bg-teal-500'
    },
    {
        skill: 'Business Analysis Skills',
        percentage: 85,
        color: 'bg-yellow-500'
    },
    {
        skill: 'Management Skills',
        percentage: 70,
        color: 'bg-purple-500'
    }
]

export const ProjectData: IProject[] = [
    {
        company: "ThinkRIT",
        name: "Neuro Integration Platform",
        for: "ThinkRIT",
        role: "Dir_Of_Engineering",
        type: "Product_Suite"
    },
    {
        company: "ACS Courier",
        name: "Portal & MyACS",
        for: "Indice",
        role: "Dev_Team_Leader",
        type: "Web_App",
        link: 'https://www.acscourier.net/en/'
    },
    {
        company: "ChaniaBank",
        name: "PSD2 Services",
        for: "Indice",
        role: "Dev_Team_Leader",
        type: "Web_Api",
        link: "https://developer.chaniabank.gr/"
    },
    {
        company: "ChaniaBank",
        name: "Web Banking",
        for: "Indice",
        role: "Dev_Team_Leader",
        type: "Web_App",
        link: "https://www.chaniabank.gr/en/ebanking/"
    },
    {
        company: "Alpha Bank",
        name: "Group API Portal",
        for: "Indice",
        role: "Dev_Team_Leader",
        type: "Web_App",
        link: "https://www.alpha.gr/en/business/myalpha/api-portal"
    },
    {
        company: "Incadea",
        name: "Vehicle Reception",
        for: undefined,
        role: "UX_Designer/Product_Architect",
        type: "Web_App",
        link: "https://www.incadea.com/en/solutions-services/passenger-cars/vehicle-health-check/"
    },
    {
        company: "Incadea",
        name: "Business Intelligence",
        for: "Incadea",
        role: "BI_Team_Leader",
        type: "Product_Suite",
        link: "https://www.incadea.com/en/solutions-services/passenger-cars/business-intelligence/"
    },
    {
        company: "ParkAround",
        name: "Portal & CRM",
        for: "Parkaround",
        role: "Dev_Team_Leader",
        type: "Web_App",
        link: "https://www.parkaround.com/"
    },
    {
        company: "Personal",
        name: "Film Closet",
        for: undefined,
        role: "Owner",
        type: "Windows_Universal_App",
        link: "https://www.microsoft.com/en-US/p/film-closet/9wzdncrfhx5s"
    },
];

export const TechnologyData: ITechnologyGroup[] = [
    {
        category: 'Backend Frameworks',
        items: [
            {
                name: 'ASP.NET Core',
                score: 100
            },
            {
                name: 'Azure Functions',
                score: 100
            },
            {
                name: 'NestJS',
                score: 90
            },
            {
                name: 'Express.js',
                score: 70
            },
            {
                name: 'Next.js',
                score: 50
            },
            {
                name: 'SvelteKit',
                score: 10
            }
        ]
    },
    {
        category: 'CSS Frameworks',
        items: [
            {
                name: 'Bootstrap',
                score: 100
            },
            {
                name: 'TailwindCSS',
                score: 90
            }
        ]
    },
    {
        category: 'Javascript Frameworks',
        items: [
            {
                name: 'Angular',
                score: 90
            },
            {
                name: 'React',
                score: 50
            },
            {
                name: 'Svelte',
                score: 20
            },
            {
                name: 'KnockoutJS',
                score: 100
            }
        ]
    },
    {
        category: 'Databases',
        items: [
            {
                name: 'MS SQL',
                score: 90
            },
            {
                name: 'MySQL',
                score: 90
            },
            {
                name: 'Cosmos DB',
                score: 70
            },
            {
                name: 'Mongo DB',
                score: 50
            },
            {
                name: 'Firestore',
                score: 10
            }
        ]
    },
    {
        category: 'Azure Services',
        items: [
            {
                name: 'App Service'
            },
            {
                name: 'Functions'
            },
            {
                name: 'Logic Apps'
            },
            {
                name: 'Service Bus'
            },
            {
                name: 'Cache for Redis'
            },
            {
                name: 'SQL Database'
            },
            {
                name: 'Cosmos DB'
            },
            {
                name: 'Traffic Manager'
            },
            {
                name: 'API Management'
            },
            {
                name: 'SQL Data Sync'
            }
        ]
    },
    {
        category: 'Message Brokers',
        items: [
            {
                name: 'Azure Service Bus'
            },
            {
                name: 'RabbitMQ'
            },
            {
                name: 'Redis Message Broker'
            }
        ]
    },
    {
        category: 'Workflows',
        items: [
            {
                name: 'Azure Durable Functions'
            },
            {
                name: 'ELSA'
            },
            {
                name: 'Temporal'
            }
        ]
    },
    {
        category: 'API Gateways',
        items: [
            {
                name: 'Ocelot'
            },
            {
                name: 'Azure API Management'
            },
            {
                name: 'Express Gateway'
            }
        ]
    },
    {
        category: 'Mobile Frameworks',
        items: [
            {
                name: 'MAUI'
            },
            {
                name: 'Ionic'
            }
        ]
    },
    {
        category: 'GIT Branching Models',
        items: [
            {
                name: 'GitFlow'
            },
            {
                name: 'GitHub Flow'
            }
        ]
    },
    {
        category: 'Editors & IDE',
        items: [
            {
                name: 'Visual Studio'
            },
            {
                name: 'Visual Studio Code'
            }
        ]
    }
];

export const ArchitectureData: IArchitecture[] = [
    {
        title: 'Monolith',
        description: 'Starter',
        nodes: [
            {
                id: 'frontend',
                type: 'input',
                data: { label: 'Frontend (spa/mobile)' },
                position: { x: 0, y: 0 },
                sourcePosition: Position.Bottom,
                className: 'bg-',
                style: { fontWeight: 'bold' }
            },
            {
                id: 'backend',
                data: { label: 'Backend (api/grpc)' },
                position: { x: 0, y: 100 },
                targetPosition: Position.Top,
                sourcePosition: Position.Bottom,
                style: { fontWeight: 'bold', backgroundColor: 'rgb(107 114 128)', color: '#fff' }
            },
            {
                id: 'backgroundTasks',
                type: 'input',
                data: { label: 'Worker (scheduled-tasks)' },
                position: { x: 150, y: 200 },
                targetPosition: Position.Top,
                sourcePosition: Position.Bottom,
                style: { fontWeight: 'bold' }
            },
            {
                id: 'common',
                type: 'output',
                data: { label: 'Common Layer (di/all-in-one)' },
                position: { x: 0, y: 400 },
                targetPosition: Position.Top,
                style: { fontWeight: 'bold', backgroundColor: 'rgb(55 65 81)', color: '#fff' }
            }
        ],
        edges: [
            {
                id: '1',
                source: 'frontend',
                target: 'backend',
                type: 'smoothstep',
                markerEnd: { type: MarkerType.ArrowClosed }
            },
            {
                id: '2',
                source: 'backend',
                target: 'common',
                type: 'smoothstep',
                markerEnd: { type: MarkerType.ArrowClosed }
            },
            {
                id: '3',
                source: 'backgroundTasks',
                target: 'common',
                markerEnd: { type: MarkerType.ArrowClosed },
                style: { stroke: 'aqua' },
            },
        ]
    },
    {
        title: 'Monolith',
        description: 'Clean',
        nodes: [
            {
                id: 'frontend',
                type: 'input',
                data: { label: 'Frontend (spa/mobile)' },
                position: { x: 0, y: 0 },
                sourcePosition: Position.Bottom,
                style: { fontWeight: 'bold' }
            },
            {
                id: 'backend',
                data: { label: 'Backend (api/grpc)' },
                position: { x: 0, y: 100 },
                targetPosition: Position.Top,
                sourcePosition: Position.Bottom,
                style: { fontWeight: 'bold', backgroundColor: 'rgb(107 114 128)', color: '#fff' }
            },
            {
                id: 'backgroundTasks',
                type: 'input',
                data: { label: 'Worker (scheduled-tasks)' },
                position: { x: 200, y: 100 },
                targetPosition: Position.Top,
                sourcePosition: Position.Bottom,
                style: { fontWeight: 'bold' }
            },
            {
                id: 'applicationLayer',
                data: { label: 'Application Layer (di/cqrs)' },
                position: { x: 0, y: 200 },
                targetPosition: Position.Top,
                sourcePosition: Position.Bottom,
                style: { fontWeight: 'bold', backgroundColor: 'rgb(55 65 81)', color: '#fff' }
            },
            {
                id: 'persistanceLayer',
                type: 'output',
                data: { label: 'Persistance Layer (db configs)' },
                position: { x: -200, y: 400 },
                targetPosition: Position.Top,
                style: { fontWeight: 'bold', backgroundColor: 'rgb(55 65 81)', color: '#fff' }
            },
            {
                id: 'domainLayer',
                type: 'output',
                data: { label: 'Domain Layer (ddd)' },
                position: { x: 0, y: 400 },
                targetPosition: Position.Top,
                style: { fontWeight: 'bold', backgroundColor: 'rgb(55 65 81)', color: '#fff' }
            },
            {
                id: 'externalLayer',
                type: 'output',
                data: { label: '{n} External (implementations)' },
                position: { x: 200, y: 400 },
                targetPosition: Position.Top,
                style: { fontWeight: 'bold' }
            }
        ],
        edges: [
            {
                id: '1',
                source: 'frontend',
                target: 'backend',
                type: 'smoothstep',
                markerEnd: { type: MarkerType.ArrowClosed }
            },
            {
                id: '2',
                source: 'backend',
                target: 'applicationLayer',
                type: 'smoothstep',
                markerEnd: { type: MarkerType.ArrowClosed }
            },
            {
                id: '3',
                source: 'applicationLayer',
                target: 'domainLayer',
                type: 'smoothstep',
                markerEnd: { type: MarkerType.ArrowClosed }
            },
            {
                id: '4',
                source: 'applicationLayer',
                target: 'persistanceLayer',
                type: 'smoothstep',
                markerEnd: { type: MarkerType.ArrowClosed }
            },
            {
                id: '5',
                source: 'applicationLayer',
                target: 'externalLayer',
                type: 'smoothstep',
                style: { stroke: 'yellow' },
                markerEnd: { type: MarkerType.ArrowClosed }
            },
            {
                id: '6',
                source: 'backgroundTasks',
                target: 'applicationLayer',
                markerEnd: { type: MarkerType.ArrowClosed },
                style: { stroke: 'aqua' },
            },
        ]
    },
    {
        title: 'Microservices',
        description: 'Hype',
        nodes: [
            {
                id: 'frontend',
                type: 'input',
                data: { label: 'Frontend (spa/mobile)' },
                position: { x: 0, y: 0 },
                sourcePosition: Position.Bottom,
                style: { fontWeight: 'bold' }
            },
            {
                id: 'gateway',
                data: { label: 'API Gateway' },
                position: { x: 0, y: 100 },
                targetPosition: Position.Top,
                sourcePosition: Position.Bottom,
                style: { fontWeight: 'bold', backgroundColor: 'rgb(107 114 128)', color: '#fff' }
            },
            {
                id: 'microservice_a',
                data: { label: 'Microservice A (api/queue/topic)' },
                position: { x: -100, y: 200 },
                targetPosition: Position.Top,
                sourcePosition: Position.Bottom,
                style: { fontWeight: 'bold', backgroundColor: 'rgb(55 65 81)', color: '#fff' }
            },
            {
                id: 'microservice_n',
                data: { label: 'Microservice {n} (api/queue/topic)' },
                position: { x: 100, y: 200 },
                targetPosition: Position.Top,
                sourcePosition: Position.Bottom,
                style: { fontWeight: 'bold', backgroundColor: 'rgb(55 65 81)', color: '#fff' }
            },
            {
                id: 'database_a',
                type: 'output',
                data: { label: 'Database A' },
                position: { x: -200, y: 320 },
                targetPosition: Position.Top,
                sourcePosition: Position.Bottom,
                style: { fontWeight: 'bold' }
            },
            {
                id: 'database_n',
                type: 'output',
                data: { label: 'Database {n}' },
                position: { x: 200, y: 320 },
                targetPosition: Position.Top,
                sourcePosition: Position.Bottom,
                style: { fontWeight: 'bold' }
            },
            {
                id: 'message_broker',
                data: { label: 'Message Broker' },
                position: { x: -100, y: 400 },
                targetPosition: Position.Top,
                sourcePosition: Position.Bottom,
                style: { fontWeight: 'bold', width: '350px', backgroundColor: 'rgb(99 102 241)', color: '#fff' }
            }
        ],
        edges: [
            {
                id: '1',
                source: 'frontend',
                target: 'gateway',
                type: 'smoothstep',
                markerEnd: { type: MarkerType.ArrowClosed }
            },
            {
                id: '2',
                source: 'gateway',
                target: 'microservice_a',
                type: 'smoothstep',
                style: { stroke: 'aqua' },
                markerEnd: { type: MarkerType.ArrowClosed }
            },
            {
                id: '3',
                source: 'gateway',
                target: 'microservice_n',
                type: 'smoothstep',
                style: { stroke: 'yellow' },
                markerEnd: { type: MarkerType.ArrowClosed }
            },
            {
                id: '4',
                source: 'microservice_a',
                target: 'database_a',
                style: { stroke: 'aqua' },
                markerEnd: { type: MarkerType.ArrowClosed }
            },
            {
                id: '5',
                source: 'microservice_n',
                target: 'database_n',
                style: { stroke: 'yellow' },
                markerEnd: { type: MarkerType.ArrowClosed }
            },
            {
                id: '6',
                source: 'microservice_a',
                target: 'message_broker',
                type: 'smoothstep',
                style: { stroke: 'aqua' },
                markerEnd: { type: MarkerType.ArrowClosed }
            },
            {
                id: '7',
                source: 'microservice_n',
                target: 'message_broker',
                type: 'smoothstep',
                style: { stroke: 'yellow' },
                markerEnd: { type: MarkerType.ArrowClosed }
            },
            {
                id: '8',
                source: 'message_broker',
                target: 'microservice_a',
                style: { stroke: 'orange' }
            },
            {
                id: '9',
                source: 'message_broker',
                target: 'microservice_n',
                style: { stroke: 'orange' }
            }
        ]
    },
    {
        title: 'Azure Serverless',
        description: 'Async-Pay-Per-Use',
        nodes: [
            {
                id: 'frontend',
                data: { label: 'Frontend (spa/mobile)' },
                position: { x: 0, y: 0 },
                sourcePosition: Position.Bottom,
                targetPosition: Position.Right,
                style: { fontWeight: 'bold' }
            },
            {
                id: 'function',
                data: { label: 'Function (http/queue/topic)' },
                position: { x: 0, y: 100 },
                targetPosition: Position.Top,
                sourcePosition: Position.Bottom,
                style: { fontWeight: 'bold', backgroundColor: 'rgb(107 114 128)', color: '#fff' }
            },
            {
                id: 'response',
                data: { label: 'Async Response\n (web hooks)' },
                position: { x: 200, y: 140 },
                targetPosition: Position.Left,
                sourcePosition: Position.Top,
                style: { fontWeight: 'bold', backgroundColor: 'rgb(107 114 128)', color: '#fff' }
            },
            {
                id: 'orchestrators',
                data: { label: 'Orchestrators' },
                position: { x: 0, y: 220 },
                targetPosition: Position.Top,
                sourcePosition: Position.Bottom,
                style: { fontWeight: 'bold', backgroundColor: 'rgb(55 65 81)', color: '#fff' }
            },
            {
                id: 'suborchestrators',
                data: { label: 'Sub-Orchestrators' },
                position: { x: 100, y: 310 },
                targetPosition: Position.Top,
                sourcePosition: Position.Bottom,
                style: { fontWeight: 'bold', backgroundColor: 'rgb(55 65 81)', color: '#fff' }
            },
            {
                id: 'activities',
                data: { label: 'Activities' },
                position: { x: 0, y: 400 },
                targetPosition: Position.Top,
                sourcePosition: Position.Right,
                style: { fontWeight: 'bold', backgroundColor: 'rgb(55 65 81)', color: '#fff' }
            },
            {
                id: 'database',
                type: 'output',
                data: { label: 'Database' },
                position: { x: 200, y: 400 },
                targetPosition: Position.Left,
                sourcePosition: Position.Bottom,
                style: { fontWeight: 'bold' }
            }
        ],
        edges: [
            {
                id: '1',
                source: 'frontend',
                target: 'function',
                type: 'smoothstep',
                markerEnd: { type: MarkerType.ArrowClosed }
            },
            {
                id: '2',
                source: 'function',
                target: 'orchestrators',
                type: 'smoothstep',
                markerEnd: { type: MarkerType.ArrowClosed },
                label: 'Begin Async Process ',
                labelShowBg: false,
                labelStyle: { fill: '#fff' },
                style: { stroke: 'orange' }
            },
            {
                id: '3',
                source: 'function',
                target: 'response',
                markerEnd: { type: MarkerType.ArrowClosed },
                style: { stroke: 'pink' }
            },
            {
                id: '4',
                source: 'response',
                target: 'frontend',
                markerEnd: { type: MarkerType.ArrowClosed },
                style: { stroke: 'pink' }
            },
            {
                id: '5',
                source: 'orchestrators',
                target: 'suborchestrators',
                type: 'smoothstep',
                markerEnd: { type: MarkerType.ArrowClosed },
                style: { stroke: 'yellow' },
            },
            {
                id: '6',
                source: 'orchestrators',
                target: 'activities',
                type: 'smoothstep',
                markerEnd: { type: MarkerType.ArrowClosed },
                style: { stroke: 'aqua' }
            },
            {
                id: '7',
                source: 'suborchestrators',
                target: 'activities',
                type: 'smoothstep',
                markerEnd: { type: MarkerType.ArrowClosed },
                style: { stroke: 'yellow' }
            },
            {
                id: '8',
                source: 'activities',
                target: 'database',
                type: 'smoothstep',
                markerEnd: { type: MarkerType.ArrowClosed }
            }
        ]
    }
];
import Avatar from "./Avatar";
import type { Student as StudentProps } from "./types";

export default function Student(props: StudentProps) {
    const { id, name } = props;
    return (
        <div>
            <Avatar name={name} />
            <p className="student-name">{name}</p>
        </div>
    );
};

/*type studentProps = {*()
    id: string;
    name: string;
}

export default function Student ({ id, name }: studentProps){
    return (
        <div>
        <p>{id}</p>
        <p className="student-name">{name}</p>
        </div>
    )
};*/
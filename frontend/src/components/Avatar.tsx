type AvatarProps = {
    name: string;
};

export default function Avatar(props: AvatarProps) {
    const { name } = props;
    const firsLetter = name.split(" ").join("").toUpperCase().slice(0, 1);
    return <p className="avatar">{firsLetter}</p>;
};

/*type AvatarProps = {
    name: string;
  };
  
  export default function Avatar({ name }: AvatarProps) {
    const getInitial = (name: string) => {
      return name.charAt(0).toUpperCase(); 
    };
  
    return (
      <div className="avatar">
        <span>{getInitial(name)}</span>
      </div>
    );
  }
  */
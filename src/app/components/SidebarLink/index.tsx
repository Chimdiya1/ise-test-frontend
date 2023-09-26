interface Props {
    text: string;
    url: string;
    isActive?: boolean;
  }
  export default function SidebarLink({ text, url, isActive = false }: Props) {
    return (
      <a
        href={url}
        className={`cursor-pointer flex px-5 py-3 text-white text-base  items-center  hover:bg-violet-400 ${
          isActive && "border-l-4 border-violet-700 pl-4 bg-violet-500 bg-opacity-30"
        }`}
      >
        <span>{text}</span>
      </a>
    );
  }
  
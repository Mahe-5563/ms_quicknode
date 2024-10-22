'use client';
import Image from "next/image";

export default function UserIconList(props: { users: Array<any>, disabled: boolean }) {
  const { users, disabled } = props;
  return (
    <div className={`flex`}>
      {users?.slice(0,3).map((user:any) => (
        <Image 
          id={user.id}
          key={user.id}
          src={user.url}
          alt={user.name}
          height={30}
          width={30}
          className="-mr-3 rounded-full border"
        />
      ))}
      {users.length > 3 && 
        <div 
          className={`
            -mr-3 rounded-full border w-7 h-7 my-auto text-center flex flex-col place-self-center ${disabled ? 'bg-zinc-300' : 'bg-[#F4D7DA]'}
          `}
        >
          <span className={`my-auto text-xs ${disabled ? 'text-zinc-600' : 'text-[#D25B68]'} font-bold`}>+{users.length - 3}</span>
        </div>
      }
    </div>
  );
}

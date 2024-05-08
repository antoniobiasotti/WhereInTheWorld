import Image from "next/image";

export function Header() {
  return (
    <header className="flex w-full justify-between border-2 border-cyan-100">
      <span>Where in the World?</span>
      <div>
        <Image src="/lua.svg" width={15} height={15} alt="Lua" />
        <span>Dark Mode</span>
      </div>
    </header>
  );
};

/* 

.header {
  width: 100%;
  height: 80px;
  background-color: #2b3844;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}
.header h1 {
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}

.darkMode {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
}

.darkMode span:hover {
  cursor: pointer;
  color: #4d0011;
  font-weight: bold;
}


*/
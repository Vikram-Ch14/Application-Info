import { useEffect, useRef } from "react";

const ChatBarConversation = () => {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="flex-1 flex flex-col overflow-y-auto">
      <div className="w-[70%] p-5 flex items-center">
        <div className="p-3 bg-slate-500 rounded-xl text-white">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cumque
            hic delectus velit. Eaque reiciendis velit consectetur, facere vitae
            saepe, tempora deserunt minima ipsam, incidunt ipsa. Consequuntur
            facilis eos error?
          </p>
        </div>
      </div>
      <div className="w-[70%] p-5 flex items-center self-end">
        <div className="p-3 bg-slate-500 rounded-xl text-white">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
            doloribus ea sed quidem, harum laudantium accusantium odio porro
            consectetur, nam voluptate quibusdam impedit ex fugit cumque
            architecto. Blanditiis, sapiente dolore?
          </p>
        </div>
      </div>
      <div className="w-[70%] p-5 flex items-center self-end">
        <div className="p-3 bg-slate-500 rounded-xl text-white">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
            doloribus ea sed quidem, harum laudantium accusantium odio porro
            consectetur, nam voluptate quibusdam impedit ex fugit cumque
            architecto. Blanditiis, sapiente dolore?
          </p>
        </div>
      </div>
      <div className="w-[70%] p-5 flex items-center self-end">
        <div className="p-3 bg-slate-500 rounded-xl text-white">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
            doloribus ea sed quidem, harum laudantium accusantium odio porro
            consectetur, nam voluptate quibusdam impedit ex fugit cumque
            architecto. Blanditiis, sapiente dolore?
          </p>
        </div>
      </div>
      <div className="w-[70%] p-5 flex items-center self-end">
        <div className="p-3 bg-slate-500 rounded-xl text-white">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
            doloribus ea sed quidem, harum laudantium accusantium odio porro
            consectetur, nam voluptate quibusdam impedit ex fugit cumque
            architecto. Blanditiis, sapiente dolore?
          </p>
        </div>
      </div>
      <div className="w-[70%] p-5 flex items-center self-end">
        <div className="p-3 bg-slate-500 rounded-xl text-white">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
            doloribus ea sed quidem, harum laudantium accusantium odio porro
            consectetur, nam voluptate quibusdam impedit ex fugit cumque
            architecto. Blanditiis, sapiente dolore?
          </p>
        </div>
      </div>
      <div className="w-[70%] p-5 flex items-center self-end">
        <div className="p-3 bg-slate-500 rounded-xl text-white">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
            doloribus ea sed quidem, harum laudantium accusantium odio porro
            consectetur, nam voluptate quibusdam impedit ex fugit cumque
            architecto. Blanditiis, sapiente dolore?
          </p>
        </div>
      </div>
      <div className="w-[70%] p-5 flex items-center self-end">
        <div className="p-3 bg-slate-500 rounded-xl text-white">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
            doloribus ea sed quidem, harum laudantium accusantium odio porro
            consectetur, nam voluptate quibusdam impedit ex fugit cumque
            architecto. Blanditiis, sapiente dolore?
          </p>
        </div>
      </div>
      <div className="w-[70%] p-5 flex items-center self-end">
        <div className="p-3 bg-slate-500 rounded-xl text-white">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
            doloribus ea sed quidem, harum laudantium accusantium odio porro
            consectetur, nam voluptate quibusdam impedit ex fugit cumque
            architecto. Blanditiis, sapiente dolore?
          </p>
        </div>
      </div>

      <div ref={endRef}></div>
    </div>
  );
};

export default ChatBarConversation;

const Page = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>

      <p className="mb-4">
        สวัสดีทุกคนที่แวะเข้ามาเยี่ยมชมเว็บนี้นะครับ
      </p>

      <p className="mb-4">
        ผมชื่อ <strong>ธนธัช ธำรงโสตถิสกุล</strong> หรือเรียกกันง่าย ๆ ว่า <strong>“ทาโร่”</strong> ครับ
        ตอนนี้ผมเป็นนิสิตชั้นปีที่ 6 คณะเภสัชศาสตร์ มหาวิทยาลัยนเรศวร
      </p>

      <p className="mb-4">
        เว็บนี้เกิดจากความที่ผมเป็นคนชอบเขียนโค้ด ทำเว็บเล่นอยู่แล้ว วันหนึ่งก็คิดว่า
        “เอ๊ะ… ถ้าเราเอาสิ่งที่เราชอบ มาทำอะไรให้มันมีประโยชน์กับเพื่อนนิสิตด้วยล่ะ?”
      </p>

      <p className="mb-4">
        จากประสบการณ์ตอนปีล่าง ๆ ที่ผมแทบไม่มีโอกาสได้จับผลิตภัณฑ์ในร้านขายยา
        เลยรู้สึกว่า ถ้ามีเว็บที่รวมข้อมูลผลิตภัณฑ์แบบเข้าใจง่าย ๆ สำหรับนิสิต มันคงจะดีมาก
        และพอดีผมเคยทำระบบขายยาสำหรับร้านยามาก่อน ก็เลยพอมีฐานข้อมูลให้หยิบมาใช้ได้
      </p>

      <p className="mb-4">
        นอกจากเขียนเว็บแล้ว ผมก็เป็นคนธรรมดา ๆ คนนึงที่ชอบฟังพอดแคสต์ เล่นเกม
        และศึกษาการลงทุนบ้างในเวลาว่าง เรียกได้ว่า ถ้าอะไรที่สร้างสรรค์ สนุก
        และเปลี่ยนโลกได้ ผมพร้อมจะลองหมดครับ 555
      </p>

      <p className="mb-4">
        ตอนนี้เว็บอาจจะยังไม่สมบูรณ์มากนัก แต่ผมจะค่อย ๆ พัฒนาและเติมอะไรใหม่ ๆ เข้าไปเรื่อย ๆ แน่นอน
        รับรองว่ามีอะไรเด็ด ๆ สำหรับสายเภสัชแน่นอนครับ (ตอนนี้ขออุบไว้ก่อน 😉)
      </p>

      <div className="bg-yellow-100 text-yellow-900 p-4 rounded-md mb-6 border border-yellow-300">
        <strong>หมายเหตุ:</strong> เว็บไซต์นี้จัดทำขึ้นเพื่อเป็นแหล่งเรียนรู้สำหรับนักศึกษาเภสัชโดยเฉพาะ
        ไม่มีเจตนาในการขายหรือโฆษณาผลิตภัณฑ์ใด ๆ ทั้งสิ้น และไม่กระทำการใด ๆ ที่ขัดต่อกฎหมายครับ
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-2">ช่องทางติดต่อและติดตาม</h2>
      <p className="mb-2">อยากให้เว็บนี้เติบโตไปพร้อม ๆ กับทุกคนครับ ถ้ามีคำแนะนำ ติชม หรืออยากพูดคุยกัน มาทักทายกันได้เลย!</p>
      <ul className="list-disc list-inside mb-4">
        <li>
          📘 Facebook:{" "}
          <a
            href="https://www.facebook.com/thanatouch.thamrongsotthisakul"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Thanatouch Thamrongsotthisakul
          </a>
        </li>
        <li>
          📸 Instagram:{" "}
          <a
            href="https://www.instagram.com/tarottz"
            className="text-pink-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tarottz
          </a>
        </li>
      </ul>

      <p className="text-lg font-semibold">เรามาเป็นเพื่อนกันเถอะ!!</p>
    </div>
  );
};

export default Page;

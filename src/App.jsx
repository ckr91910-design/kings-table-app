{/* 실천 메모 입력 칸 */}
<div className="mt-8 p-4 bg-gray-50 rounded-lg">
  <h3 className="text-lg font-bold mb-2">📝 나의 실천 메모</h3>
  <textarea 
    className="w-full h-32 p-3 border rounded-md"
    placeholder="오늘 받은 깨달음을 기록하세요..."
  />
</div>

{/* 다음 날로 이동 버튼 */}
<button 
  className="w-full mt-4 bg-amber-900 text-white py-4 rounded-xl font-bold"
  onClick={() => {/* 다음 날짜 이동 로직 */}}
>
  오늘의 만찬 완료 및 다음 날로 이동
</button>

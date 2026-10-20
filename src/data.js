export const STORAGE_KEYS = {
  items: 'su_lf_items_v1',
  users: 'su_lf_users_v1',
  currentUser: 'su_lf_current_user_v1',
  claims: 'su_lf_claims_v1'
}

export const initialItems = [
  {
    i_id: 'demo-1',
    i_title: 'กระเป๋าสตางค์สีดำ',
    i_description: 'พบกระเป๋าสตางค์สีดำ มีบัตรอยู่ด้านใน ผู้เป็นเจ้าของช่วยแจ้งรายละเอียดเพื่อยืนยันตัวตน',
    i_location: 'อาคารเรียนรวม ชั้น 1',
    i_date_happened: new Date().toISOString().slice(0, 10),
    i_type: 'found',
    i_status: 'Open',
    i_image_path: '',
    i_owner: 'ผู้ดูแลระบบ',
    createdAt: Date.now() - 100000
  },
  {
    i_id: 'demo-2',
    i_title: 'หูฟังไร้สายสีขาว',
    i_description: 'ทำหูฟังไร้สายหาย คาดว่าอาจหล่นบริเวณห้องสมุดหรือโต๊ะอ่านหนังสือ',
    i_location: 'หอสมุดพระราชวังสนามจันทร์',
    i_date_happened: new Date().toISOString().slice(0, 10),
    i_type: 'lost',
    i_status: 'Open',
    i_image_path: '',
    i_owner: 'ผู้ใช้ตัวอย่าง',
    createdAt: Date.now() - 50000
  }
]

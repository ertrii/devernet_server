import Notice from '../interfaces/notice'
import NoticeModel from '../models/notice_model'

interface IntoNotice {
    title: string
    textarea: string
    user_id: number
}

export async function notice(_: any, data: { id: string }): Promise<Notice | null> {
    const notice = await NoticeModel.findByPk(data.id)
    return notice?.get() || null
}

export async function notices(): Promise<Notice[]> {
    const notices = await NoticeModel.findAll()
    return notices.map((notice) => notice.get())
}

export async function create_notice(_: any, data: { into_notice: IntoNotice }): Promise<Notice> {
    const notice = await NoticeModel.create(data.into_notice)
    return notice.get()
}

export async function update_notice(
    _: any,
    data: { id: string; into_notice: IntoNotice }
): Promise<Notice> {
    const notice = await NoticeModel.findByPk(data.id)
    notice?.set(data.into_notice)
    const notice_updated = await notice?.save()
    return { ...notice_updated?.get(), ...data.into_notice }
}

export async function delete_notice(_: any, data: { id: string }): Promise<{ id: string }> {
    const notice = await NoticeModel.findByPk(data.id)
    await notice?.destroy()
    return {
        id: data.id
    }
}

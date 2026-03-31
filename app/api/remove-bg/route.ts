import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { image } = await req.json()
  
  try {
    const base64Data = image.split(',')[1]
    
    const response = await fetch('https://api.remove.bg/v1.0/removebg', {
      method: 'POST',
      headers: {
        'X-Api-Key': process.env.REMOVEBG_API_KEY || '',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image_file_b64: base64Data,
        size: 'auto',
      }),
    })

    if (!response.ok) {
      throw new Error('API调用失败')
    }

    const resultBuffer = await response.arrayBuffer()
    const resultBase64 = Buffer.from(resultBuffer).toString('base64')
    
    return NextResponse.json({ 
      result: `data:image/png;base64,${resultBase64}` 
    })
  } catch (error) {
    return NextResponse.json({ error: '处理失败' }, { status: 500 })
  }
}

/**
 * ══════════════════════════════════════════════════════════════
 *  Google Apps Script — KOR Device Dashboard API
 * ══════════════════════════════════════════════════════════════
 *
 *  [설정 방법]
 *  1. Google Sheets에서: 확장 프로그램 > Apps Script 클릭
 *  2. 이 코드를 전체 복사하여 Apps Script 편집기에 붙여넣기
 *  3. 상단 메뉴: 배포 > 새 배포
 *  4. 유형: "웹 앱" 선택
 *  5. 실행 사용자: "나" (본인 계정)
 *  6. 액세스 권한: "본인만" 또는 "모든 사용자" (필요에 따라)
 *     - "본인만": 로그인한 본인만 접근 가능
 *     - "모든 사용자": API URL을 아는 사람만 접근 가능 (시트는 비공개 유지)
 *  7. "배포" 클릭 → Web App URL 복사
 *  8. 복사한 URL을 dashboard.html의 APPS_SCRIPT_URL에 붙여넣기
 *
 *  [보안 참고]
 *  - 스프레드시트 자체는 비공개 유지됩니다.
 *  - Apps Script가 중간 역할을 하여 데이터만 JSON으로 전달합니다.
 *  - 추가 보안이 필요하면 API_KEY를 설정하세요 (아래 참조).
 */

// (선택) 간단한 API 키 보안 — 대시보드와 동일한 키를 설정하세요
const API_KEY = ''; // 예: 'my-secret-key-12345' (빈 문자열이면 키 검증 안 함)

function doGet(e) {
  // API 키 검증 (설정된 경우)
  if (API_KEY && e.parameter.key !== API_KEY) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: 'Unauthorized' }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('u_cmdb_ci_workstation (2)');

    if (!sheet) {
      return ContentService
        .createTextOutput(JSON.stringify({ error: 'Sheet not found' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const data = sheet.getDataRange().getValues();
    const headers = data[0];
    const rows = [];

    for (let i = 1; i < data.length; i++) {
      const row = {};
      headers.forEach((h, idx) => {
        row[h] = data[i][idx] !== null && data[i][idx] !== undefined
          ? String(data[i][idx]).trim()
          : '';
      });
      // 빈 행 제외
      if (row['name'] || row['asset'] || row['serial_number']) {
        rows.push(row);
      }
    }

    const result = {
      success: true,
      count: rows.length,
      timestamp: new Date().toISOString(),
      data: rows
    };

    return ContentService
      .createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

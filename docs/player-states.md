# 게임 개발에서의 플레이어 상태 가이드

## 일반적인 플레이어 상태 종류

게임 개발에서 플레이어 캐릭터는 다양한 상태를 가지며, 이를 통해 애니메이션, 물리 효과, 입력 처리 등이 결정됩니다. 아래는 게임 장르에 따라 널리 사용되는 플레이어 상태들입니다.

### 기본 이동 상태
- **Idle (대기)**: 플레이어가 아무 행동도 하지 않고 서 있는 상태
- **Walk (걷기)**: 일반적인 속도로 이동하는 상태
- **Run (달리기)**: 빠른 속도로 이동하는 상태
- **Sprint (전력질주)**: 최대 속도로 이동하는 상태, 보통 스태미나 소모
- **Crouch (웅크리기)**: 낮은 자세로 이동하거나 엄폐하는 상태
- **Sneak (살금살금 걷기)**: 소리를 최소화하며 느리게 이동하는 상태

### 공중 상태
- **Jump (점프)**: 공중으로 도약하는 상태
- **DoubleJump (이중 점프)**: 공중에서 한번 더 점프하는 상태
- **Fall (낙하)**: 중력에 의해 아래로 떨어지는 상태
- **Glide (활공)**: 천천히 하강하며 이동하는 상태
- **Float (부유)**: 공중에 떠 있는 상태

### 전투 상태
- **Attack (공격)**: 기본 공격을 수행하는 상태
- **Defend (방어)**: 방어 자세를 취하는 상태
- **Block (막기)**: 적의 공격을 차단하는 상태
- **Parry (받아치기)**: 적의 공격을 정확한 타이밍에 튕겨내는 상태
- **Charge (차지 공격)**: 에너지를 모아 강력한 공격을 준비하는 상태
- **Cast (주문 시전)**: 마법이나 스킬을 사용하는 상태

### 상호작용 상태
- **Interact (상호작용)**: 오브젝트나 NPC와 상호작용하는 상태
- **Climb (오르기)**: 벽이나 사다리를 오르는 상태
- **Swim (수영)**: 물 속에서 이동하는 상태
- **Push/Pull (밀기/당기기)**: 오브젝트를 밀거나 당기는 상태
- **Grab (잡기)**: 물체를 잡거나 매달리는 상태

### 피해 및 회복 상태
- **Hit/Damaged (피격)**: 피해를 받는 상태
- **Stunned (기절)**: 일시적으로 움직일 수 없는 상태
- **Knockback (넉백)**: 피해를 받아 뒤로 밀려나는 상태
- **Recover (회복)**: 상태 이상에서 회복되는 상태

### 특수 상태
- **Dash (대시)**: 짧은 거리를 순간적으로 이동하는 상태
- **Roll (구르기)**: 구르며 피하는 상태
- **Dodge (회피)**: 적의 공격을 피하는 상태
- **Stealth (은신)**: 적에게 발각되지 않는 상태
- **Dead (사망)**: 플레이어가 사망한 상태
- **Respawn (부활)**: 사망 후 다시 살아나는 상태

## 플레이어 상태 구현 방법

### 1. 상태 열거형 정의
```typescript
export const PlayerState = {
  IDLE = 'idle',
  WALK = 'walk',
  RUN = 'run',
  JUMP = 'jump',
  FALL = 'fall',
  ATTACK = 'attack',
  DAMAGE = 'damage',
  DEAD = 'dead',
  // 추가 상태들...
} as const
export type PlayerState = typeof PlayerState[keyof typeof PlayerState]
```

### 2. 상태 머신 구현
```typescript
class PlayerStateMachine {
  private currentState: PlayerState = PlayerState.IDLE;
  
  setState(newState: PlayerState): void {
    if (this.currentState === newState) return;
    
    // 이전 상태 종료 로직
    this.exitState(this.currentState);
    
    // 새 상태로 변경
    this.currentState = newState;
    
    // 새 상태 시작 로직
    this.enterState(this.currentState);
  }
  
  private enterState(state: PlayerState): void {
    // 상태 진입 시 로직
    switch (state) {
      case PlayerState.IDLE:
        // 대기 상태 진입 로직
        break;
      case PlayerState.JUMP:
        // 점프 상태 진입 로직
        break;
      // 기타 상태들...
    }
  }
  
  private exitState(state: PlayerState): void {
    // 상태 종료 시 로직
  }
  
  update(deltaTime: number): void {
    // 현재 상태에 따른 업데이트 로직
    switch (this.currentState) {
      case PlayerState.IDLE:
        // 대기 상태 업데이트
        break;
      // 기타 상태들...
    }
  }
}
```

### 3. 상태별 클래스 구현 (상태 패턴)
```typescript
interface IPlayerState {
  enter(): void;
  update(deltaTime: number): void;
  exit(): void;
}

class IdleState implements IPlayerState {
  enter(): void {
    // 대기 상태 진입 시 로직
  }
  
  update(deltaTime: number): void {
    // 대기 상태 유지 중 로직
  }
  
  exit(): void {
    // 대기 상태 종료 시 로직
  }
}

// 다른 상태 클래스들...
```

## 상태 전환 조건 예시

- **Idle → Walk**: 이동 입력 감지
- **Walk → Run**: 달리기 버튼 누름
- **Idle/Walk/Run → Jump**: 점프 버튼 누름
- **Jump → Fall**: 최고점 도달 후
- **Fall → Idle**: 땅에 착지
- **Idle → Attack**: 공격 버튼 누름
- **Any → Damage**: 피해 받음
- **Damage → Dead**: 체력 0 이하로 감소
- **Dead → Respawn**: 부활 타이머 완료

## 상태와 애니메이션 연결

각 상태는 일반적으로 해당하는 애니메이션과 연결됩니다:

```typescript
function playAnimationForState(state: PlayerState): void {
  switch (state) {
    case PlayerState.IDLE:
      playAnimation('player_idle');
      break;
    case PlayerState.WALK:
      playAnimation('player_walk');
      break;
    case PlayerState.JUMP:
      playAnimation('player_jump');
      break;
    // 기타 상태들...
  }
}
```

## 상태별 물리 특성 조정

상태에 따라 물리적 특성이 변경될 수 있습니다:

```typescript
function updatePhysicsForState(state: PlayerState): void {
  switch (state) {
    case PlayerState.CROUCH:
      setColliderHeight(halfHeight);
      setMovementSpeed(slowSpeed);
      break;
    case PlayerState.SPRINT:
      setMovementSpeed(maxSpeed);
      setStaminaDrain(true);
      break;
    // 기타 상태들...
  }
}
```

## 상태 디버깅 도구

개발 중에는 플레이어의 현재 상태를 시각적으로 표시하는 디버깅 도구를 구현하는 것이 도움이 됩니다:

```typescript
function debugPlayerState(state: PlayerState): void {
  if (isDebugMode) {
    displayText(`현재 상태: ${state}`, x, y);
  }
}
``` 
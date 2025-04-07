export const PlayerState = {
    // TODO: 기본 상태
    /** 대기 */
    IDLE: 'idle',
    /** 걷기 */
    WALK: 'walk',
    /** 뛰기 */
    RUN: 'run',

    // TODO: 공중 상태
    /** 점프 */
    JUMP: 'jump',
    /** 이중 점프 */
    DOUBLE_JUMP: 'doubleJump',
    /** 낙하 */
    FALL: 'fall',
    /** 활공 */
    GLIDE: 'glide',
    /** 부유 */
    FLOAT: 'float',

    // TODO: 상호작용 상태
    /** 상호작용 */
    INTERACT: 'interact',
    /** 오르기 */
    CLIMB: 'climb',
    /** 수영 */
    SWIM: 'swim',
    /** 밀기/당기기 */
    PUSH_PULL: 'pushPull',
    /** 잡기 */
    GRAB: 'grab',

    // TODO: 전투 상태
    /** 공격 */
    ATTACK: 'attack',
    /** 방어 */
    DEFEND: 'defend',
    /** 막기 */
    BLOCK: 'block',
    /** 받아치기 */
    PARRY: 'parry',
    /** 차지 공격 */
    CHARGE: 'charge',
    /** 주문 시전 */
    CAST: 'cast',

    // TODO: 피해 및 회복 상태:
    /** 피격 */
    HIT: 'hit',
    /** 기절 */
    STUNNED: 'stunned',
    /** 넉백 */
    KNOCKBACK: 'knockback',
    /** 회복 */
    RECOVER: 'recover',

    // TODO: 특수 상태
    /** 대시 */
    DASH: 'dash',
    /** 구르기 */
    ROLL: 'roll',
    /** 회피 */
    DODGE: 'dodge',
    /** 은신 */
    STEALTH: 'stealth',
    /** 사망 */
    DEAD: 'dead',
    /** 부활 */
    RESPAWN: 'respawn',


} as const
export type PlayerState = typeof PlayerState[keyof typeof PlayerState]